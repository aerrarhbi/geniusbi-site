/* ========================================
   GeniusBI — Shared JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // === Navbar scroll effect ===
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // === Mobile menu toggle (iOS compatible) ===
  const toggle = document.querySelector('.navbar-toggle');
  const navLinks = document.querySelector('.navbar-links');
  const navBar = document.getElementById('navbar');
  var savedScroll = 0;
  if (toggle && navLinks) {
    let lastToggle = 0;
    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      var now = Date.now();
      if (now - lastToggle < 300) return;
      lastToggle = now;
      var willOpen = !navLinks.classList.contains('open');
      navLinks.classList.toggle('open');
      toggle.classList.toggle('active');
      if (navBar) navBar.style.zIndex = willOpen ? '99999' : '';
      if (willOpen) {
        savedScroll = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = -savedScroll + 'px';
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, savedScroll);
        requestAnimationFrame(function(){ document.documentElement.style.scrollBehavior = ''; });
      }
    }
    toggle.addEventListener('click', toggleMenu, false);
    toggle.addEventListener('touchend', toggleMenu, false);
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
        if (navBar) navBar.style.zIndex = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, savedScroll);
        requestAnimationFrame(function(){ document.documentElement.style.scrollBehavior = ''; });
      });
    });
  }

  // === Intersection Observer for scroll reveals ===
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right')
    .forEach(el => revealObserver.observe(el));

  // === Smooth scroll for anchor links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu if open
        if (navLinks) navLinks.classList.remove('open');
        if (toggle) toggle.classList.remove('active');
      }
    });
  });

  // === Magnetic button effect ===
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const r = this.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.12;
      const y = (e.clientY - r.top - r.height / 2) * 0.12;
      this.style.transform = `translate(${x}px, ${y}px) translateY(-2px)`;
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // === 3D Tilt on cards ===
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const r = this.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const tiltX = (y - 0.5) * 6;
      const tiltY = (x - 0.5) * -6;
      this.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
      setTimeout(() => { this.style.transition = ''; }, 500);
    });
  });

  // === Parallax on .parallax-orb elements ===
  const orbs = document.querySelectorAll('.parallax-orb');
  if (orbs.length) {
    window.addEventListener('scroll', () => {
      const s = window.scrollY;
      orbs.forEach((orb, i) => {
        const speed = [0.03, 0.02, 0.04][i % 3];
        orb.style.transform = `translateY(${s * speed}px)`;
      });
    });
  }

  // === Active nav link ===
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // === Tab switching (for services page) ===
  document.querySelectorAll('[data-tab-trigger]').forEach(trigger => {
    trigger.addEventListener('click', function() {
      const tabGroup = this.closest('[data-tab-group]');
      const targetId = this.dataset.tabTrigger;

      // Update triggers
      tabGroup.querySelectorAll('[data-tab-trigger]').forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // Update panels
      tabGroup.querySelectorAll('[data-tab-panel]').forEach(panel => {
        panel.classList.remove('active');
        if (panel.dataset.tabPanel === targetId) {
          panel.classList.add('active');
        }
      });
    });
  });

  // === Grid Spotlight — cursor reveals bright grid on hero sections ===
  var gridBrightEls = document.querySelectorAll('.page-hero-grid-bright');
  if (gridBrightEls.length > 0) {
    var gmx = -500, gmy = -500, gsx = -500, gsy = -500;
    document.addEventListener('mousemove', function(e) { gmx = e.clientX; gmy = e.clientY; });
    function animateGrid() {
      gsx += (gmx - gsx) * 0.12;
      gsy += (gmy - gsy) * 0.12;
      gridBrightEls.forEach(function(el) {
        el.style.setProperty('--mx', gsx + 'px');
        el.style.setProperty('--my', gsy + 'px');
      });
      requestAnimationFrame(animateGrid);
    }
    animateGrid();
  }

});
