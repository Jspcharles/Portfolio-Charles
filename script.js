// ===== Index strip: a decorative SPEI-style drought severity timeline =====
// Colours run from drought (amber) to surplus (teal), loosely inspired by
// a 34-segment SPEI-12 record. Purely visual — replace the `values` array
// with real index values any time.
(function renderIndexStrip() {
  const strip = document.getElementById('indexStrip');
  if (!strip) return;

  // Values from -1 (severe drought) to +1 (wet). Edit freely.
  const values = [
    -0.8, -0.6, -0.3, 0.1, 0.4, 0.2, -0.2, -0.5, -0.9, -1,
    -0.7, -0.4, 0.0, 0.3, 0.6, 0.5, 0.2, -0.1, -0.4, -0.6,
    -0.8, -1, -0.9, -0.5, -0.1, 0.2, 0.5, 0.7, 0.4, 0.1,
    -0.3, -0.6, -0.9, -0.7
  ];

  const drought = [201, 122, 61];   // #c97a3d
  const wet = [74, 139, 124];       // #4a8b7c

  function lerp(a, b, t) { return Math.round(a + (b - a) * t); }

  values.forEach((v) => {
    const t = (v + 1) / 2; // normalize -1..1 to 0..1
    const r = lerp(drought[0], wet[0], t);
    const g = lerp(drought[1], wet[1], t);
    const b = lerp(drought[2], wet[2], t);
    const seg = document.createElement('span');
    seg.style.background = `rgb(${r}, ${g}, ${b})`;
    strip.appendChild(seg);
  });
})();

// ===== Mobile nav toggle =====
(function mobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('site-nav-mobile');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ===== Footer year =====
(function footerYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
