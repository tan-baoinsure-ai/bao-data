import { throttle } from '../utils/throttle.js';

(function initCarousel() {
  const viewport = document.querySelector('.carousel__viewport');
  const track = document.querySelector('.carousel__track');
  const slides = track ? Array.from(track.children) : [];
  const prevBtn = document.querySelector('.carousel__prev');
  const nextBtn = document.querySelector('.carousel__next');
  if (!viewport || !track || slides.length === 0) return;

  let index = 0;
  function update() {
    track.style.transform = `translateX(${-index * 100}%)`;
    viewport.setAttribute('aria-live', 'polite');
  }
  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    update();
  }
  function next() {
    index = (index + 1) % slides.length;
    update();
  }

  prevBtn?.addEventListener('click', prev);
  nextBtn?.addEventListener('click', next);

  // Keyboard
  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // Touch
  let startX = 0;
  let deltaX = 0;
  viewport.addEventListener('pointerdown', (e) => {
    startX = e.clientX;
    viewport.setPointerCapture(e.pointerId);
  });
  viewport.addEventListener(
    'pointermove',
    throttle((e) => {
      if (startX) deltaX = e.clientX - startX;
    }, 16)
  );
  viewport.addEventListener('pointerup', () => {
    if (Math.abs(deltaX) > 40) {
      deltaX < 0 ? next() : prev();
    }
    startX = 0;
    deltaX = 0;
  });

  update();
})();
