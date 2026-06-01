/**
 * Rendermint — AI Video Ads for Cannabis Brands
 * Interactive behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initContactForm();
  initScrollAnimations();
  initHeroVideoRotation();
  initReviewsCarousel();
});

function initHeroVideoRotation() {
  const slide1 = document.querySelector('.hero-video-slide[data-video="0"]');
  const slide2 = document.querySelector('.hero-video-slide[data-video="1"]');
  const video1 = document.getElementById('hero-video-1');
  const video2 = document.getElementById('hero-video-2');
  const preloadVideo = document.getElementById('hero-video-preload');
  if (!slide1 || !slide2 || !video1 || !video2) return;

  const sources = [
    'assets/hero-video-last.mp4',
    'assets/hero-video-2.mov',
    'assets/hero-video-3.mov',
  ];

  let index = 0;

  function preloadNext() {
    if (preloadVideo) {
      preloadVideo.src = sources[(index + 1) % sources.length];
      preloadVideo.load();
    }
  }

  preloadNext();

  function getNextIndex() {
    return (index + 1) % sources.length;
  }

  function transitionToNext() {
    const nextIndex = getNextIndex();
    const currentSlide = slide1.classList.contains('hero-video-current') ? slide1 : slide2;
    const nextSlide = currentSlide === slide1 ? slide2 : slide1;
    const currentVideo = currentSlide.querySelector('video');
    const nextVideo = nextSlide.querySelector('video');

    nextVideo.src = sources[nextIndex];
    nextVideo.load();

    function startTransition() {
      nextVideo.play();
      currentSlide.classList.remove('hero-video-current');
      currentSlide.classList.add('hero-video-slide-out-right');
      nextSlide.classList.remove('hero-video-next');
      nextSlide.classList.add('hero-video-slide-in-from-left');
      nextSlide.style.transform = 'translateX(0)';

      setTimeout(() => {
        currentSlide.classList.remove('hero-video-slide-out-right');
        currentSlide.style.transform = 'translateX(-100%)';
        currentSlide.classList.add('hero-video-next');
        nextSlide.classList.remove('hero-video-slide-in-from-left');
        nextSlide.classList.add('hero-video-current');
        nextSlide.style.transform = '';
        const loadIndex = (nextIndex + 1) % sources.length;
        currentVideo.src = sources[loadIndex];
        currentVideo.load();
        index = nextIndex;
        preloadNext();
      }, 600);
    }

    if (nextVideo.readyState >= 2) {
      startTransition();
    } else {
      nextVideo.addEventListener('canplay', startTransition, { once: true });
    }
  }

  video1.addEventListener('ended', transitionToNext);
  video2.addEventListener('ended', transitionToNext);
}

function initReviewsCarousel() {
  const viewport = document.querySelector('.work-reviews-viewport');
  const track = document.querySelector('.work-reviews-track');
  const prevBtn = document.querySelector('.work-reviews-arrow--prev');
  const nextBtn = document.querySelector('.work-reviews-arrow--next');
  if (!viewport || !track || !prevBtn || !nextBtn) return;

  const cards = track.querySelectorAll('.work-review-card');
  const totalReviews = 9;
  if (cards.length !== totalReviews) return;

  const reviewOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  const totalItems = reviewOrder.length;

  const templates = Array.from(cards).map((card) => card.cloneNode(true));
  track.innerHTML = '';
  reviewOrder.forEach((i) => track.appendChild(templates[i].cloneNode(true)));

  track.querySelectorAll('.work-review-card').forEach((card) => {
    card.style.opacity = '';
    card.style.transform = '';
  });

  const totalPositions = 16;
  let trackOffset = 0;

  function getGapPx() {
    const style = getComputedStyle(document.documentElement);
    const gapRem = parseFloat(style.getPropertyValue('--space-xl')) || 2;
    return gapRem * parseFloat(getComputedStyle(document.documentElement).fontSize) || 32;
  }

  function updateSizes() {
    const viewportWidth = viewport.offsetWidth;
    if (viewportWidth <= 0) return;
    const gapPx = getGapPx();
    const isMobile = viewportWidth <= 640;
    const cardWidthPx = isMobile
      ? viewportWidth
      : (viewportWidth - 2 * gapPx) / 3;
    const stepPx = cardWidthPx + gapPx;
    const trackWidthPx = totalItems * cardWidthPx + (totalItems - 1) * gapPx;

    viewport.style.setProperty('--review-card-width', `${cardWidthPx}px`);
    viewport.style.setProperty('--review-step', `${stepPx}px`);
    track.style.width = `${trackWidthPx}px`;
  }

  function getTrackOffset() {
    return trackOffset;
  }

  function setSlide(noTransition) {
    const trackOffset = getTrackOffset();
    if (noTransition) track.style.transition = 'none';
    track.style.setProperty('--review-index', trackOffset);
    if (noTransition) {
      track.offsetHeight;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          track.style.transition = '';
        });
      });
    }
  }

  updateSizes();
  setSlide(false);
  if (viewport.offsetWidth <= 0) requestAnimationFrame(() => { updateSizes(); setSlide(false); });
  window.addEventListener('resize', updateSizes);

  prevBtn.addEventListener('click', () => {
    trackOffset = (trackOffset - 1 + totalPositions) % totalPositions;
    setSlide(false);
  });

  nextBtn.addEventListener('click', () => {
    trackOffset = (trackOffset + 1) % totalPositions;
    setSlide(false);
  });
}

function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!btn || !navLinks) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      submitBtn.textContent = 'Message Sent!';
      submitBtn.style.background = '#10b981';
      form.reset();

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 2500);
    }, 800);
  });
}

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe service cards, work cards, about section
  document.querySelectorAll('.service-card, .work-card, .about-content, .about-visual').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });

  // Add visible class styles via CSS - we need to add these
  const style = document.createElement('style');
  style.textContent = `
    .service-card.visible,
    .work-card.visible,
    .about-content.visible,
    .about-visual.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}
