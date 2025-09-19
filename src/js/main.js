// TechFlow Solutions - Interactive Features
// ES6 JavaScript with modern best practices

class TechFlowApp {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.positionIndicator = document.querySelector('.position-indicator');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('section');
    this.carousel = document.querySelector('.carousel');
    this.carouselSlides = document.querySelectorAll('.carousel-slide');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.teamMembers = document.querySelectorAll('.team-member');
    this.modals = document.querySelectorAll('.modal');
    this.closeButtons = document.querySelectorAll('.close');

    this.currentSlide = 0;
    this.isScrolling = false;

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updatePositionIndicator();
    this.updateNavbarOnScroll();
  }

  setupEventListeners() {
    // Smooth scrolling navigation
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });

    // Scroll events for navbar and position indicator
    window.addEventListener('scroll', () => this.handleScroll());

    // Carousel navigation
    if (this.prevBtn && this.nextBtn) {
      this.prevBtn.addEventListener('click', () => this.previousSlide());
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // Auto-advance carousel
    this.startCarouselAutoplay();

    // Modal functionality
    this.teamMembers.forEach(member => {
      member.addEventListener('click', () => this.openModal(member));
    });

    this.closeButtons.forEach(button => {
      button.addEventListener('click', () => this.closeModal(button));
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => this.handleModalOutsideClick(e));

    // Keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e));

    // Hero CTA button functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      ctaButton.addEventListener('click', () => {
        document.getElementById('services').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  }

  // Smooth Scrolling Navigation (10% grade weight)
  handleNavClick(e) {
    e.preventDefault();
    const clickedLink = e.target;
    const targetId = clickedLink.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Immediately update the active link and indicator
      this.navLinks.forEach(link => link.classList.remove('active'));
      clickedLink.classList.add('active');

      // Find the index of the clicked link
      const clickedIndex = Array.from(this.navLinks).indexOf(clickedLink);
      this.updateIndicatorPosition(clickedIndex);

      const navbarHeight = this.navbar.offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Scroll event handler for multiple features
  handleScroll() {
    if (!this.isScrolling) {
      this.isScrolling = true;
      requestAnimationFrame(() => {
        this.updateNavbarOnScroll();
        this.updatePositionIndicator();
        this.isScrolling = false;
      });
    }
  }

  // Navbar Resizing on Scroll (5% grade weight)
  updateNavbarOnScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  }

  // Position Indicator in Navbar (5% grade weight)
  updatePositionIndicator() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbarHeight = this.navbar.offsetHeight;
    let activeSection = null;
    let activeLinkIndex = 0;

    // Find the current section
    this.sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - navbarHeight - 50;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
        activeSection = section;
        activeLinkIndex = index;
      }
    });

    // Handle bottom of page case
    if (scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 10) {
      activeLinkIndex = this.sections.length - 1;
      activeSection = this.sections[activeLinkIndex];
    }

    // Update active navigation link
    this.navLinks.forEach((link, index) => {
      link.classList.remove('active');
      if (index === activeLinkIndex) {
        link.classList.add('active');
      }
    });

    // Update position indicator with improved calculation
    this.updateIndicatorPosition(activeLinkIndex);
  }

  // Separate method for updating indicator position
  updateIndicatorPosition(activeLinkIndex) {
    if (this.navLinks[activeLinkIndex]) {
      const activeLink = this.navLinks[activeLinkIndex];
      const navContainer = this.navbar.querySelector('.nav-container');

      // Get positions relative to the navbar container
      const containerRect = navContainer.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      const indicatorLeft = linkRect.left - containerRect.left;
      const indicatorWidth = linkRect.width;

      this.positionIndicator.style.left = `${indicatorLeft}px`;
      this.positionIndicator.style.width = `${indicatorWidth}px`;
      this.positionIndicator.style.opacity = '1';
    }
  }

  // Carousel Functionality (10% grade weight)
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselSlides.length;
    this.updateCarousel();
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselSlides.length) % this.carouselSlides.length;
    this.updateCarousel();
  }

  updateCarousel() {
    this.carouselSlides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === this.currentSlide) {
        slide.classList.add('active');
      }
    });
  }

  startCarouselAutoplay() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Auto-advance every 5 seconds
  }

  // Modal Windows Functionality (10% grade weight)
  openModal(teamMember) {
    const modalId = teamMember.getAttribute('data-modal');
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling

      // Focus management for accessibility
      const closeButton = modal.querySelector('.close');
      if (closeButton) {
        closeButton.focus();
      }
    }
  }

  closeModal(closeButton) {
    const modal = closeButton.closest('.modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
  }

  handleModalOutsideClick(e) {
    if (e.target.classList.contains('modal')) {
      this.closeModal(e.target.querySelector('.close'));
    }
  }

  // Keyboard Navigation for Accessibility
  handleKeyboardNavigation(e) {
    // ESC key to close modals
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
        this.closeModal(activeModal.querySelector('.close'));
      }
    }

    // Arrow keys for carousel navigation
    if (e.key === 'ArrowLeft') {
      this.previousSlide();
    } else if (e.key === 'ArrowRight') {
      this.nextSlide();
    }
  }

  // Utility method for smooth animations
  animateElement(element, animationClass, duration = 1000) {
    element.classList.add(animationClass);
    setTimeout(() => {
      element.classList.remove(animationClass);
    }, duration);
  }

  // Intersection Observer for scroll animations
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.service-card, .team-member, .column');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
}

// Performance monitoring
class PerformanceMonitor {
  static logLoadTime() {
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      console.log(`Page loaded in ${loadTime}ms`);
    });
  }

  static logScrollPerformance() {
    let lastScrollTime = 0;
    window.addEventListener('scroll', () => {
      const now = performance.now();
      const delta = now - lastScrollTime;
      lastScrollTime = now;

      // Log if scroll event frequency is too high (performance concern)
      if (delta < 16) { // 60fps threshold
        console.warn('Scroll performance issue detected');
      }
    });
  }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize main application
  const app = new TechFlowApp();

  // Initialize performance monitoring
  PerformanceMonitor.logLoadTime();

  // Initialize scroll animations
  app.initScrollAnimations();

  // Force set background image for hero section
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.style.backgroundImage = `
      linear-gradient(rgba(44, 62, 80, 0.4), rgba(52, 152, 219, 0.3)),
      url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')
    `;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';
    heroSection.style.backgroundAttachment = 'fixed';
  }

  console.log('metaFrazo - Application initialized successfully');
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('Application error:', e.error);
});

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TechFlowApp, PerformanceMonitor };
}
