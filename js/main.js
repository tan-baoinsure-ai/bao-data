// Global init and lightweight guards
(function initGlobal() {
  try {
    // Dynamic year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Demo form validation
    const form = document.querySelector('.cta__form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = form.querySelector('#email');
        const error = form.querySelector('.field__error');
        const status = form.querySelector('.form__status');
        if (!email || !error || !status) return;

        error.textContent = '';
        status.hidden = false;
        status.textContent = 'Submitting…';

        const value = email.value.trim();
        const valid = /.+@.+\..+/.test(value);
        if (!valid) {
          status.hidden = true;
          error.textContent = 'Please enter a valid email.';
          email.focus();
          return;
        }

        await new Promise((r) => setTimeout(r, 600));
        status.textContent = "Thanks! We'll be in touch.";
      });
    }
  } catch (err) {
    // Non-blocking fallback
    console.warn('Init error', err);
  }
})();
