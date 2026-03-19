(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const SCRIPT_SRC = 'https://platform.twitter.com/widgets.js';
  let timeoutId;

  function loadWidgets() {
    if (window.twttr && window.twttr.widgets && typeof window.twttr.widgets.load === 'function') {
      window.twttr.widgets.load();
      return;
    }

    if (document.querySelector('script[data-x-embed-script="true"]')) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = SCRIPT_SRC;
    script.charset = 'utf-8';
    script.setAttribute('data-x-embed-script', 'true');
    document.head.appendChild(script);
  }

  function scheduleLoad() {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(loadWidgets, 150);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadWidgets, { once: true });
  } else {
    loadWidgets();
  }

  const observer = new MutationObserver(scheduleLoad);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
