import { throttle } from '../utils/throttle.js';

(function initNav() {
  const header = document.getElementById('site-header');
  const nav = header?.querySelector('.nav');
  const toggle = header?.querySelector('.nav__toggle');
  const menu = header?.querySelector('#nav-menu');
  if (!header || !nav || !toggle || !menu) return;

  function setSticky() {
    // Force dark header as baseline
    nav.classList.toggle('is-sticky', window.scrollY > 8);
    header.classList.add('header--solid');
    header.classList.remove('header--transparent');
  }
  setSticky();
  window.addEventListener('scroll', throttle(setSticky, 100), {
    passive: true
  });

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open', !expanded);
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    }
  });
})();
