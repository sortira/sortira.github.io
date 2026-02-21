// ===== Theme Toggle =====
(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');

  function setTheme(theme) {
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('color-theme', theme);
    updateIcons(theme);
  }

  function updateIcons(theme) {
    if (!iconSun || !iconMoon) return;
    if (theme === 'light') {
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    } else {
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    }
  }

  // Initialize
  const saved = localStorage.getItem('color-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  setTheme(theme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.classList.contains('light') ? 'light' : 'dark';
      setTheme(current === 'light' ? 'dark' : 'light');
    });
  }
})();

// ===== Mobile Menu =====
(() => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ===== Scroll Reveal =====
(() => {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  reveals.forEach(el => observer.observe(el));
})();

// ===== Footer Year =====
(() => {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// ===== Ensure main clears fixed navbar =====
(function() {
  const setMainOffset = () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    // add a small breathing room (px) below the navbar
    const extra = 28;
    const offset = nav.offsetHeight + extra;
    document.documentElement.style.setProperty('--main-offset', offset + 'px');
  };

  // Run on load and when things resize/rotate
  window.addEventListener('load', setMainOffset);
  window.addEventListener('resize', setMainOffset);
  window.addEventListener('orientationchange', setMainOffset);
  // Run once now in case script loads after DOM ready
  setMainOffset();
})();
