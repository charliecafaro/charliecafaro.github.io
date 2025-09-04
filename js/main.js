/**
 * Portfolio Navigation & Interactions
 * Refined JavaScript for Charlie Cafaro's portfolio
 */

class Portfolio {
  constructor() {
    this.currentSection = 'about';
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('.section');
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupScrollObserver();
    this.setupAnimations();
    this.setupMobileMenu();
    this.setupGalleryVideos();

    // Set initial active section
    this.showSection('about');

    console.log('Portfolio initialized successfully');
  }

  setupNavigation() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute('data-section');
        this.showSection(targetSection);
        this.updateNavigation(targetSection);
      });
    });
  }

  showSection(sectionId) {
    // Hide all sections
    this.sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
      this.currentSection = sectionId;

      // Animate section entrance
      this.animateSection(targetSection);
    }
  }

  updateNavigation(activeSection) {
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === activeSection) {
        link.classList.add('active');
      }
    });
  }

  animateSection(section) {
    // Simple fade-in animation
    section.style.opacity = '0';
    section.style.transform = 'translateY(10px)';

    requestAnimationFrame(() => {
      section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    });
  }

  setupScrollObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.stat-card, .skill-category, .project-card, .timeline-item, .gallery-item, .text-block'
    );

    animatableElements.forEach(el => {
      observer.observe(el);
    });
  }

  setupAnimations() {
    // Add subtle animations for elements
    const style = document.createElement('style');
    style.textContent = `
      .stat-card,
      .skill-category,
      .project-card,
      .timeline-item,
      .gallery-item,
      .text-block {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      
      /* Staggered delays */
      .stat-card:nth-child(1) { transition-delay: 0.1s; }
      .stat-card:nth-child(2) { transition-delay: 0.15s; }
      .stat-card:nth-child(3) { transition-delay: 0.2s; }
      .stat-card:nth-child(4) { transition-delay: 0.25s; }
      
      .skill-category:nth-child(1) { transition-delay: 0.1s; }
      .skill-category:nth-child(2) { transition-delay: 0.2s; }
      .skill-category:nth-child(3) { transition-delay: 0.3s; }
      
      .project-card:nth-child(1) { transition-delay: 0.1s; }
      .project-card:nth-child(2) { transition-delay: 0.15s; }
      .project-card:nth-child(3) { transition-delay: 0.2s; }
      .project-card:nth-child(4) { transition-delay: 0.25s; }
      
      .gallery-item:nth-child(1) { transition-delay: 0.1s; }
      .gallery-item:nth-child(2) { transition-delay: 0.15s; }
      .gallery-item:nth-child(3) { transition-delay: 0.2s; }
      .gallery-item:nth-child(4) { transition-delay: 0.25s; }
      .gallery-item:nth-child(5) { transition-delay: 0.3s; }
      .gallery-item:nth-child(6) { transition-delay: 0.35s; }
      
      .text-block:nth-child(1) { transition-delay: 0.1s; }
      .text-block:nth-child(2) { transition-delay: 0.2s; }
      .text-block:nth-child(3) { transition-delay: 0.3s; }
    `;
    document.head.appendChild(style);
  }

  setupGalleryVideos() {
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');

    videoPlaceholders.forEach(placeholder => {
      placeholder.addEventListener('click', (e) => {
        e.preventDefault();
        const galleryVideo = placeholder.closest('.gallery-video');
        const iframe = galleryVideo.querySelector('iframe');

        if (iframe && iframe.dataset.src) {
          // Load and play the video
          iframe.src = iframe.dataset.src + '?autoplay=1&rel=0';
          galleryVideo.classList.add('playing');

          // Optional: Analytics tracking
          console.log('Video played:', iframe.title || 'Untitled video');
        }
      });
    });

    // Pause videos when leaving gallery section
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const target = mutation.target;
            if (!target.classList.contains('active') && target.id === 'gallery') {
              // Stop all playing videos
              const playingVideos = target.querySelectorAll('.gallery-video.playing');
              playingVideos.forEach(video => {
                const iframe = video.querySelector('iframe');
                if (iframe && iframe.src) {
                  iframe.src = '';
                  video.classList.remove('playing');
                }
              });
            }
          }
        });
      });

      observer.observe(gallerySection, { attributes: true });
    }
  }

  setupMobileMenu() {
    // Add mobile toggle if on mobile
    if (window.innerWidth <= 768) {
      this.createMobileToggle();
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768 && !document.querySelector('.mobile-toggle')) {
        this.createMobileToggle();
      } else if (window.innerWidth > 768) {
        const toggle = document.querySelector('.mobile-toggle');
        const sidebar = document.querySelector('.sidebar');
        if (toggle) {
          toggle.remove();
        }
        if (sidebar) {
          sidebar.classList.remove('mobile-open');
        }
      }
    });
  }

  createMobileToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'mobile-toggle';
    toggle.innerHTML = '<i class="fas fa-bars"></i>';
    toggle.setAttribute('aria-label', 'Toggle navigation menu');

    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.insertBefore(toggle, mainContent.firstChild);
    }

    // Toggle functionality
    const sidebar = document.querySelector('.sidebar');
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
      const icon = toggle.querySelector('i');
      if (sidebar.classList.contains('mobile-open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });

    // Close menu when clicking nav links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('mobile-open');
          const icon = toggle.querySelector('i');
          if (icon) {
            icon.className = 'fas fa-bars';
          }
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 &&
          sidebar &&
          !sidebar.contains(e.target) &&
          !toggle.contains(e.target) &&
          sidebar.classList.contains('mobile-open')) {
        sidebar.classList.remove('mobile-open');
        const icon = toggle.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-bars';
        }
      }
    });
  }
}

// Enhanced interactions class
class PortfolioEnhancements {
  constructor() {
    this.setupSkillLevels();
    this.setupHoverEffects();
    this.setupEmailTracking();
  }

  setupSkillLevels() {
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(level => {
      level.style.cursor = 'help';
      level.addEventListener('mouseenter', () => {
        const levelNumber = level.getAttribute('data-level');
        level.setAttribute('title', `Skill Level: ${levelNumber}/5`);
      });
    });
  }

  setupHoverEffects() {
    // Subtle hover effects for cards
    const cards = document.querySelectorAll('.project-card, .gallery-item, .stat-card, .skill-category');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-3px)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    // Timeline hover effects
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      const content = item.querySelector('.timeline-content');
      if (content) {
        item.addEventListener('mouseenter', () => {
          content.style.transform = 'translateX(5px)';
        });

        item.addEventListener('mouseleave', () => {
          content.style.transform = '';
        });
      }
    });
  }

  setupEmailTracking() {
    // Track email link clicks
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
      link.addEventListener('click', () => {
        console.log('Email contact initiated');
        // Add analytics tracking here if needed
      });
    });
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize main portfolio functionality
  const portfolio = new Portfolio();
  const enhancements = new PortfolioEnhancements();

  // Smooth page load transition
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.4s ease';
    document.body.style.opacity = '1';
  }, 50);

  // Lazy load images if any
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Store portfolio instance globally for debugging
  window.portfolioInstance = portfolio;
});

// Handle browser navigation
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.section && window.portfolioInstance) {
    window.portfolioInstance.showSection(e.state.section);
    window.portfolioInstance.updateNavigation(e.state.section);
  }
});

// Export for external use
window.Portfolio = Portfolio;