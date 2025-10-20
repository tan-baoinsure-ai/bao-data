(function initHero() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  hero.style.opacity = '0';
  hero.style.transform = 'translateY(8px)';
  const animateIn = () => {
    hero.style.transition = 'opacity .5s ease, transform .5s ease';
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  };
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    requestAnimationFrame(animateIn);
  } else {
    window.addEventListener('DOMContentLoaded', animateIn, { once: true });
  }
})();
