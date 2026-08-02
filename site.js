/* aritro.is-a.dev — theme toggle.
   The pre-paint theme read lives inline in each page's <head>; this file
   only handles interaction, so it can safely be deferred. */

(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-btn');
  var lbl = document.getElementById('theme-label');
  if (!btn) return;

  function sync() {
    var t = root.getAttribute('data-theme');
    if (lbl) lbl.textContent = t;
    btn.setAttribute('aria-label', 'Switch to ' + (t === 'dark' ? 'light' : 'dark') + ' theme');
  }
  sync();

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
})();
