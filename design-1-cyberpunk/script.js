document.getElementById('year').textContent = new Date().getFullYear();

(function typed() {
  const phrases = ['Software Engineer @ EPAM', 'AWS + Azure Certified', 'Claude Certified Architect', 'GenAI · Java · RPA'];
  const el = document.getElementById('typed-text');
  if (!el) return;
  let i = 0, c = 0, del = false;
  (function tick() {
    const cur = phrases[i];
    if (!del) { el.textContent = cur.slice(0, ++c); if (c === cur.length) { del = true; return setTimeout(tick, 1800); } }
    else { el.textContent = cur.slice(0, --c); if (c === 0) { del = false; i = (i + 1) % phrases.length; } }
    setTimeout(tick, del ? 35 : 65);
  })();
})();

(function counters() {
  const stats = document.querySelectorAll('.stat-num');
  const animate = (el) => {
    const t = parseInt(el.dataset.target, 10);
    let c = 0;
    const step = Math.max(1, Math.ceil(t / 40));
    const id = setInterval(() => { c += step; if (c >= t) { c = t; clearInterval(id); } el.textContent = c; }, 30);
  };
  const ob = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { animate(e.target); ob.unobserve(e.target); } }), { threshold: 0.4 });
  stats.forEach(s => ob.observe(s));
})();

(function particles() {
  const canvas = document.getElementById('bg-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, ps;
  function resize() { w = canvas.width = innerWidth * devicePixelRatio; h = canvas.height = innerHeight * devicePixelRatio; canvas.style.width = innerWidth + 'px'; canvas.style.height = innerHeight + 'px'; }
  function init() { ps = []; for (let i = 0; i < 60; i++) ps.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3 * devicePixelRatio, vy: (Math.random() - .5) * .3 * devicePixelRatio, r: (Math.random() * 1.5 + .5) * devicePixelRatio }); }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const md = 140 * devicePixelRatio;
    for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) {
      const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y, d = Math.sqrt(dx * dx + dy * dy);
      if (d < md) { ctx.strokeStyle = `rgba(140,130,255,${(1 - d / md) * .25})`; ctx.lineWidth = .5 * devicePixelRatio; ctx.beginPath(); ctx.moveTo(ps[i].x, ps[i].y); ctx.lineTo(ps[j].x, ps[j].y); ctx.stroke(); }
    }
    for (const p of ps) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; ctx.fillStyle = 'rgba(180,170,255,.6)'; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }
    requestAnimationFrame(draw);
  }
  resize(); init(); draw();
  addEventListener('resize', () => { resize(); init(); });
})();
