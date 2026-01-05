/**
 * Neo Cognizant Labs
 * Smooth, modern interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initRevealAnimations();
  initOrbInteraction();
  initHoverEffects();
});

/**
 * Header scroll behavior
 */
function initHeader() {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Reveal animations on scroll
 */
function initRevealAnimations() {
  const elements = document.querySelectorAll(
    '.flow-content, .focus-item, .products-inner, .philosophy-block'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/**
 * Orb mouse interaction
 */
function initOrbInteraction() {
  const orbs = document.querySelectorAll('.orb');
  const hero = document.querySelector('.hero');

  if (!hero || orbs.length === 0) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
    mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
  });

  const animate = () => {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    orbs.forEach((orb, i) => {
      const factor = (i + 1) * 20;
      orb.style.transform = `translate(${currentX * factor}px, ${currentY * factor}px)`;
    });

    requestAnimationFrame(animate);
  };

  animate();
}

/**
 * Hover effects for focus items
 */
function initHoverEffects() {
  const focusItems = document.querySelectorAll('.focus-item');

  focusItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-8px)';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
    });
  });

  // Logo interaction
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('mouseenter', () => {
      const icon = logo.querySelector('.logo-icon');
      if (icon) {
        icon.style.transform = 'scale(1.05) rotate(-3deg)';
      }
    });

    logo.addEventListener('mouseleave', () => {
      const icon = logo.querySelector('.logo-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0)';
      }
    });
  }

  // Contact link
  const contactLink = document.querySelector('.contact-link');
  if (contactLink) {
    contactLink.addEventListener('mouseenter', () => {
      contactLink.style.transform = 'translateY(-2px)';
    });

    contactLink.addEventListener('mouseleave', () => {
      contactLink.style.transform = 'translateY(0)';
    });
  }
}

// Console signature
console.log('%c Neo Cognizant Labs ', 'background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold;');
