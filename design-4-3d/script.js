document.getElementById('year').textContent = new Date().getFullYear();

// Mouse spotlight follow
(function spotlight() {
  const sp = document.getElementById('spotlight');
  if (!sp || matchMedia('(hover: none)').matches) return;
  let tx = 0, ty = 0, x = 0, y = 0;
  addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
  (function loop() {
    x += (tx - x) * 0.15; y += (ty - y) * 0.15;
    sp.style.left = x + 'px'; sp.style.top = y + 'px';
    requestAnimationFrame(loop);
  })();
})();

// Custom cursor — replace the default with a small ring + dot
(function cursor() {
  if (matchMedia('(hover: none)').matches) return;
  const ring = document.createElement('div');
  const dot = document.createElement('div');
  Object.assign(ring.style, { position: 'fixed', width: '28px', height: '28px', border: '1.5px solid rgba(240,238,247,.55)', borderRadius: '50%', pointerEvents: 'none', zIndex: '9999', transform: 'translate(-50%,-50%)', transition: 'transform .12s ease, width .15s, height .15s, border-color .15s', mixBlendMode: 'difference' });
  Object.assign(dot.style, { position: 'fixed', width: '5px', height: '5px', background: '#f0eef7', borderRadius: '50%', pointerEvents: 'none', zIndex: '9999', transform: 'translate(-50%,-50%)', mixBlendMode: 'difference' });
  document.body.appendChild(ring); document.body.appendChild(dot);
  let rx = 0, ry = 0, dx = 0, dy = 0, tx = 0, ty = 0;
  addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; dot.style.left = tx + 'px'; dot.style.top = ty + 'px'; });
  (function loop() { rx += (tx - rx) * 0.2; ry += (ty - ry) * 0.2; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(loop); })();
  document.querySelectorAll('a, button, .tilt-card').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.style.width = '50px'; ring.style.height = '50px'; ring.style.borderColor = 'rgba(124,92,255,.8)'; });
    el.addEventListener('mouseleave', () => { ring.style.width = '28px'; ring.style.height = '28px'; ring.style.borderColor = 'rgba(240,238,247,.55)'; });
  });
})();

// 3D tilt on cards
(function tilt() {
  const cards = document.querySelectorAll('[data-tilt]');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -10;
      const ry = (px - 0.5) * 10;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      card.style.setProperty('--mx', (px * 100) + '%');
      card.style.setProperty('--my', (py * 100) + '%');
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
})();

// Reveal-on-scroll
const reveal = document.querySelectorAll('.section, .work-card, .cert');
reveal.forEach(r => { r.style.opacity = '0'; r.style.transform = 'translateY(30px)'; r.style.transition = 'opacity .7s ease, transform .7s ease'; });
const io = new IntersectionObserver((es) => {
  es.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }, i * 30);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
reveal.forEach(r => io.observe(r));
