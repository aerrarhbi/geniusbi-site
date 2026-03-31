const KV_URL = process.env.GENIUS_KV_REST_API_URL;
const KV_TOKEN = process.env.GENIUS_KV_REST_API_TOKEN;
const KEY = 'gitex-bookings-2026';
const RATE_PREFIX = 'gitex-rate:';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://geniusbi.ma';

// Valid time slots (9h-17h, 30-min increments)
const VALID_TIMES = [
  '09:00','09:30','10:00','10:30','11:00','11:30',
  '12:00','12:30','13:00','13:30','14:00','14:30',
  '15:00','15:30','16:00','16:30',
];
const VALID_DATES = ['2026-04-07', '2026-04-08', '2026-04-09'];
const VALID_DURATIONS = [10, 15, 30];
const MAX_BOOKINGS_PER_EMAIL = 3;
const RATE_LIMIT_WINDOW = 60; // seconds
const RATE_LIMIT_MAX = 10;    // max requests per window per IP
const MAX_FIELD_LENGTH = 300;
const MAX_COMMENT_LENGTH = 1000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function kvCommand(...args) {
  const res = await fetch(KV_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args),
  });
  return res.json();
}

// Pipeline: execute multiple KV commands atomically
async function kvPipeline(commands) {
  const res = await fetch(`${KV_URL}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
  });
  return res.json();
}

async function getBookings() {
  if (!KV_URL || !KV_TOKEN) return null;
  try {
    const data = await kvCommand('GET', KEY);
    return data.result ? JSON.parse(data.result) : [];
  } catch {
    return null;
  }
}

async function saveBookings(bookings) {
  await kvCommand('SET', KEY, JSON.stringify(bookings));
}

// Rate limiting by IP using KV
async function checkRateLimit(ip) {
  const key = RATE_PREFIX + ip;
  try {
    const results = await kvPipeline([
      ['INCR', key],
      ['EXPIRE', key, RATE_LIMIT_WINDOW],
    ]);
    const count = results[0]?.result || 0;
    return count <= RATE_LIMIT_MAX;
  } catch {
    // If rate limiting fails, allow the request (fail open)
    return true;
  }
}

function getClientIp(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown'
  );
}

function sanitize(str, maxLen) {
  if (typeof str !== 'string') return '';
  // Strip HTML tags, trim, and limit length
  return str.replace(/<[^>]*>/g, '').trim().slice(0, maxLen);
}

function setCorsHeaders(res, req) {
  const origin = req.headers.origin || '';
  // Allow the production domain + localhost for dev
  if (origin === ALLOWED_ORIGIN || origin.startsWith('http://localhost')) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Vary', 'Origin');
}

module.exports = async (req, res) => {
  setCorsHeaders(res, req);

  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // KV not configured → 503
  if (!KV_URL || !KV_TOKEN) {
    return res.status(503).json({ error: 'Storage not configured', fallback: true });
  }

  // Rate limiting
  const ip = getClientIp(req);
  const allowed = await checkRateLimit(ip);
  if (!allowed) {
    return res.status(429).json({ error: 'Trop de requêtes. Réessayez dans une minute.' });
  }

  // ===== GET — list anonymized bookings =====
  if (req.method === 'GET') {
    const bookings = await getBookings();
    if (bookings === null) return res.status(500).json({ error: 'Storage error' });

    const anonymized = bookings.map((b) => ({
      date: b.date,
      time: b.time,
      duration: b.duration,
    }));
    return res.json({ bookings: anonymized });
  }

  // ===== POST — create booking =====
  if (req.method === 'POST') {
    // Verify Content-Type
    const ct = req.headers['content-type'] || '';
    if (!ct.includes('application/json')) {
      return res.status(415).json({ error: 'Content-Type must be application/json' });
    }

    const body = req.body || {};
    const date = sanitize(body.date, 10);
    const time = sanitize(body.time, 5);
    const duration = Number(body.duration);
    const name = sanitize(body.name, MAX_FIELD_LENGTH);
    const company = sanitize(body.company, MAX_FIELD_LENGTH);
    const email = sanitize(body.email, MAX_FIELD_LENGTH).toLowerCase();
    const phone = sanitize(body.phone, 20);
    const service = sanitize(body.service, MAX_FIELD_LENGTH);
    const comment = sanitize(body.comment, MAX_COMMENT_LENGTH);
    const demo = !!body.demo;

    // Required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Nom et email sont obligatoires.' });
    }

    // Validate date
    if (!VALID_DATES.includes(date)) {
      return res.status(400).json({ error: 'Date invalide.' });
    }

    // Validate time slot (strict whitelist)
    if (!VALID_TIMES.includes(time)) {
      return res.status(400).json({ error: 'Créneau horaire invalide.' });
    }

    // Validate duration
    if (!VALID_DURATIONS.includes(duration)) {
      return res.status(400).json({ error: 'Durée invalide.' });
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'Format email invalide.' });
    }

    // Validate phone format (if provided)
    if (phone && !/^[+\d\s\-().]{6,20}$/.test(phone)) {
      return res.status(400).json({ error: 'Format téléphone invalide.' });
    }

    const bookings = await getBookings();
    if (bookings === null) return res.status(500).json({ error: 'Storage error' });

    // Check for slot conflict
    const conflict = bookings.find((b) => b.date === date && b.time === time);
    if (conflict) {
      return res.status(409).json({ error: 'Ce créneau est déjà réservé.' });
    }

    // Limit bookings per email
    const emailCount = bookings.filter((b) => b.email === email).length;
    if (emailCount >= MAX_BOOKINGS_PER_EMAIL) {
      return res.status(429).json({
        error: `Maximum ${MAX_BOOKINGS_PER_EMAIL} réservations par email.`,
      });
    }

    const booking = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      date,
      time,
      duration,
      name,
      company,
      email,
      phone,
      service,
      comment,
      demo,
      ip,
      createdAt: new Date().toISOString(),
    };

    bookings.push(booking);
    await saveBookings(bookings);

    return res.status(201).json({ success: true, booking: { date, time, duration } });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
