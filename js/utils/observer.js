// Lazy-load images using IntersectionObserver
(function initLazyImages(){
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries, obs) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const src = el.getAttribute('data-src');
        if (src) {
          el.src = src;
          el.removeAttribute('data-src');
        }
        obs.unobserve(el);
      }
    }
  }, { rootMargin: '200px 0px' });

  document.querySelectorAll('[data-src]').forEach(img => io.observe(img));
})();


