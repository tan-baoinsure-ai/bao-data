export function throttle(callback, delay) {
  let lastCallTime = 0;
  let timeoutId = null;
  let lastArgs, lastThis;

  function invoke() {
    lastCallTime = Date.now();
    timeoutId = null;
    callback.apply(lastThis, lastArgs);
    lastArgs = lastThis = null;
  }

  return function throttledFunction(...args) {
    const now = Date.now();
    const remaining = delay - (now - lastCallTime);
    lastArgs = args;
    lastThis = this;

    if (remaining <= 0 || remaining > delay) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      invoke();
    } else if (!timeoutId) {
      timeoutId = setTimeout(invoke, remaining);
    }
  };
}
