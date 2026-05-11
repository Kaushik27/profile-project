document.getElementById('year').textContent = new Date().getFullYear();

// Soft scroll-reveal for blocks
const blocks = document.querySelectorAll('.block, .cert, .exp-row');
blocks.forEach(b => { b.style.opacity = '0'; b.style.transform = 'translateY(20px)'; b.style.transition = 'opacity .8s ease, transform .8s ease'; });
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }, i * 40);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
blocks.forEach(b => observer.observe(b));
