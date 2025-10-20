export function debounce(callback, delay) {
  let timeoutId;
  return function debouncedFunction(...args) {
    const ctx = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(ctx, args), delay);
  };
}
