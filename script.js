// ============================================
// River Nest Properties — Site Scripts
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Form submission feedback
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = 'Thank you — message received';
        btn.disabled = true;
        btn.style.background = 'var(--sage-deep)';
        setTimeout(() => {
          form.reset();
          btn.innerHTML = original;
          btn.disabled = false;
          btn.style.background = '';
        }, 3500);
      }
    });
  });

  // Initialize carousels — wait a tick so dynamically-built listings exist
  initAllCarousels();
});

function initAllCarousels() {
  document.querySelectorAll('.carousel').forEach(carousel => {
    // Skip if already initialized
    if (carousel.dataset.carouselReady === 'true') return;
    carousel.dataset.carouselReady = 'true';
    initCarousel(carousel);
  });
}

function initCarousel(carousel) {
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prev = carousel.querySelector('.carousel-arrow.prev');
  const next = carousel.querySelector('.carousel-arrow.next');
  const dots = carousel.querySelectorAll('.carousel-dot');
  if (!track || slides.length === 0) return;

  let index = 0;
  const total = slides.length;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  if (prev) prev.addEventListener('click', (e) => {
    e.preventDefault(); e.stopPropagation();
    index = (index - 1 + total) % total;
    update();
  });

  if (next) next.addEventListener('click', (e) => {
    e.preventDefault(); e.stopPropagation();
    index = (index + 1) % total;
    update();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      index = i;
      update();
    });
  });

  // Touch swipe support
  let startX = 0, isDown = false;
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; isDown = true;
  }, { passive: true });
  track.addEventListener('touchend', (e) => {
    if (!isDown) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) index = (index + 1) % total;
      else index = (index - 1 + total) % total;
      update();
    }
    isDown = false;
  });
}

// Expose so listings.js can re-init carousels after rendering
window.initAllCarousels = initAllCarousels;
