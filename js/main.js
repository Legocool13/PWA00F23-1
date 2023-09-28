
function regSW() {
  if ('service worker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
}
