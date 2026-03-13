/* ========================================
   GeniusBI — Magic Animations JS Engine
   Powers CSS animation classes with JS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // === 1. NUMBER TICKER ===
  // Animates numbers counting up when visible
  // Usage: <span class="number-tick" data-target="94" data-suffix="%">0</span>
  const numberTicks = document.querySelectorAll('.number-tick');
  const tickObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        const target = parseFloat(entry.target.dataset.target);
        const suffix = entry.target.dataset.suffix || '';
        const prefix = entry.target.dataset.prefix || '';
        const decimals = (target % 1 !== 0) ? 1 : 0;
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * target;
          entry.target.textContent = prefix + current.toFixed(decimals) + suffix;
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            entry.target.textContent = prefix + target.toFixed(decimals) + suffix;
            entry.target.classList.add('counting');
            setTimeout(() => entry.target.classList.remove('counting'), 300);
          }
        }
        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.5 });
  numberTicks.forEach(el => tickObserver.observe(el));

  // === 2. TEXT REVEAL ON SCROLL ===
  // Words fade in as you scroll through them
  // Usage: <div class="text-reveal" data-text="Your text here"></div>
  document.querySelectorAll('.text-reveal').forEach(container => {
    const text = container.dataset.text || container.textContent;
    container.innerHTML = '';
    text.split(' ').forEach(word => {
      const span = document.createElement('span');
      span.className = 'text-reveal-word';
      span.textContent = word;
      container.appendChild(span);
    });
  });

  // Scroll-based text reveal
  function updateTextReveal() {
    document.querySelectorAll('.text-reveal').forEach(container => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const words = container.querySelectorAll('.text-reveal-word');
      const containerTop = rect.top;
      const containerBottom = rect.bottom;

      if (containerTop < windowH && containerBottom > 0) {
        const progress = Math.max(0, Math.min(1,
          (windowH - containerTop) / (windowH * 0.6)
        ));
        const wordsToReveal = Math.floor(progress * words.length);
        words.forEach((word, i) => {
          word.classList.toggle('revealed', i < wordsToReveal);
        });
      }
    });
  }
  window.addEventListener('scroll', updateTextReveal, { passive: true });
  updateTextReveal();

  // === 3. FLICKERING GRID GENERATOR ===
  // Creates random dots that flicker
  // Usage: <div class="flicker-grid" data-count="40"></div>
  document.querySelectorAll('.flicker-grid').forEach(grid => {
    const count = parseInt(grid.dataset.count) || 30;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div');
      dot.className = 'flicker-cell';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.setProperty('--flicker-speed', (3 + Math.random() * 5) + 's');
      dot.style.setProperty('--flicker-max', (0.15 + Math.random() * 0.4).toFixed(2));
      dot.style.animationDelay = (Math.random() * 5) + 's';
      dot.style.width = (1.5 + Math.random() * 2) + 'px';
      dot.style.height = dot.style.width;
      grid.appendChild(dot);
    }
  });

  // === 4. METEORS GENERATOR ===
  // Creates falling meteor lines
  // Usage: <div class="meteors-container" data-count="6"></div>
  document.querySelectorAll('.meteors-container').forEach(container => {
    const count = parseInt(container.dataset.count) || 5;
    for (let i = 0; i < count; i++) {
      const meteor = document.createElement('span');
      meteor.className = 'meteor';
      meteor.style.left = (10 + Math.random() * 80) + '%';
      meteor.style.top = '-80px';
      meteor.style.setProperty('--meteor-speed', (2 + Math.random() * 4) + 's');
      meteor.style.animationDelay = (Math.random() * 8) + 's';
      meteor.style.height = (50 + Math.random() * 80) + 'px';
      container.appendChild(meteor);
    }
  });

  // === 5. RIPPLE EFFECT ===
  // Click creates expanding circle
  // Usage: class="ripple-effect"
  document.querySelectorAll('.ripple-effect').forEach(el => {
    el.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // === 6. SCROLL PROGRESS BAR ===
  // Usage: <div class="scroll-progress"></div>
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      progressBar.style.transform = `scaleX(${progress})`;
    }, { passive: true });
  }

  // === 7. MARQUEE TRACK DUPLICATION ===
  // Clones children for seamless infinite scroll
  // Usage: div.marquee > div.marquee-track > items
  document.querySelectorAll('.marquee-track').forEach(track => {
    if (!track.dataset.cloned) {
      const children = Array.from(track.children);
      children.forEach(child => {
        const clone = child.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
      });
      track.dataset.cloned = 'true';
    }
  });

  // === 8. BLUR FADE observer ===
  const blurObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.blur-fade').forEach(el => blurObserver.observe(el));

  // === 9. STAGGER CHILDREN observer ===
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.stagger-children').forEach(el => staggerObserver.observe(el));

  // === 10. SMOOTH CURSOR GLOW ===
  // Adds a subtle glow that follows the mouse in hero sections
  const heroGlow = document.querySelector('.hero-cursor-glow');
  if (heroGlow) {
    const hero = heroGlow.parentElement;
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      heroGlow.style.left = (e.clientX - rect.left) + 'px';
      heroGlow.style.top = (e.clientY - rect.top) + 'px';
    });
  }

});
