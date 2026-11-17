(() => {
  'use strict';
  document.documentElement.dataset.theme = 'dark';
  const browserColor = document.querySelector('meta[name="theme-color"]');
  if (browserColor) browserColor.content = '#081a24';
  try { localStorage.removeItem('kt-theme'); } catch {}
})();
