document.getElementById('year').textContent = new Date().getFullYear();

// Matrix rain background
(function matrix() {
  const c = document.getElementById('matrix');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w, h, cols, drops;
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ01010111ABCDEFKAUSHIKMANDAL$';

  function resize() {
    w = c.width = innerWidth;
    h = c.height = innerHeight;
    cols = Math.floor(w / 16);
    drops = new Array(cols).fill(0).map(() => Math.random() * -100);
  }

  function draw() {
    ctx.fillStyle = 'rgba(2, 8, 6, 0.08)';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#00ff95';
    ctx.font = '14px JetBrains Mono, monospace';
    for (let i = 0; i < cols; i++) {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.globalAlpha = Math.random() * 0.6 + 0.3;
      ctx.fillText(ch, i * 16, drops[i] * 16);
      drops[i]++;
      if (drops[i] * 16 > h && Math.random() > 0.975) drops[i] = 0;
    }
    ctx.globalAlpha = 1;
  }

  resize();
  setInterval(draw, 60);
  addEventListener('resize', resize);
})();

// Stagger-reveal terminal lines on scroll
const lines = document.querySelectorAll('.line, .out, .ascii');
lines.forEach(l => { l.style.opacity = '0'; l.style.transition = 'opacity .4s ease'; });
const io = new IntersectionObserver((es) => {
  es.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => { e.target.style.opacity = '1'; }, i * 20);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.05 });
lines.forEach(l => io.observe(l));
