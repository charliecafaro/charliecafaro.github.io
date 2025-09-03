/**
 * Portfolio Navigation & Interactions
 * Clean, efficient JavaScript for Charlie Cafaro's portfolio
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
    // Add entrance animation class
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';

    // Trigger animation
    requestAnimationFrame(() => {
      section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    });
  }

  setupScrollObserver() {
    // Intersection Observer for animations when elements come into view
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

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.stat-card, .skill-category, .project-card, .timeline-item'
    );

    animatableElements.forEach(el => {
      observer.observe(el);
    });
  }

  setupAnimations() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .stat-card,
      .skill-category,
      .project-card,
      .timeline-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      
      /* Stagger animation delays */
      .stat-card:nth-child(1) { transition-delay: 0.1s; }
      .stat-card:nth-child(2) { transition-delay: 0.2s; }
      .stat-card:nth-child(3) { transition-delay: 0.3s; }
      .stat-card:nth-child(4) { transition-delay: 0.4s; }
      
      .skill-category:nth-child(1) { transition-delay: 0.1s; }
      .skill-category:nth-child(2) { transition-delay: 0.2s; }
      .skill-category:nth-child(3) { transition-delay: 0.3s; }
      
      .project-card:nth-child(1) { transition-delay: 0.1s; }
      .project-card:nth-child(2) { transition-delay: 0.2s; }
      .project-card:nth-child(3) { transition-delay: 0.3s; }
      .project-card:nth-child(4) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);
  }

  setupMobileMenu() {
    // Handle mobile navigation
    const sidebar = document.querySelector('.sidebar');
    let touchStartY = 0;
    let touchEndY = 0;

    // Add mobile menu toggle if needed
    if (window.innerWidth <= 768) {
      this.createMobileToggle();
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768 && !document.querySelector('.mobile-toggle')) {
        this.createMobileToggle();
      } else if (window.innerWidth > 768) {
        const toggle = document.querySelector('.mobile-toggle');
        if (toggle) {
          toggle.remove();
        }
        sidebar.classList.remove('mobile-open');
      }
    });
  }

  createMobileToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'mobile-toggle';
    toggle.innerHTML = '<i class="fas fa-bars"></i>';
    toggle.setAttribute('aria-label', 'Toggle navigation menu');

    const mainContent = document.querySelector('.main-content');
    mainContent.insertBefore(toggle, mainContent.firstChild);

    // Add mobile toggle styles
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
      .mobile-toggle {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1001;
        background: var(--primary);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 12px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: var(--transition);
        box-shadow: var(--shadow);
      }
      
      .mobile-toggle:hover {
        background: var(--primary-hover);
        transform: scale(1.05);
      }
      
      @media (min-width: 769px) {
        .mobile-toggle {
          display: none;
        }
      }
      
      @media (max-width: 768px) {
        .sidebar {
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        
        .sidebar.mobile-open {
          transform: translateX(0);
        }
        
        .main-content {
          margin-left: 0;
        }
      }
    `;
    document.head.appendChild(mobileStyles);

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

    // Close menu when clicking nav links on mobile
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('mobile-open');
          toggle.querySelector('i').className = 'fas fa-bars';
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 &&
          !sidebar.contains(e.target) &&
          !toggle.contains(e.target) &&
          sidebar.classList.contains('mobile-open')) {
        sidebar.classList.remove('mobile-open');
        toggle.querySelector('i').className = 'fas fa-bars';
      }
    });
  }
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Enhanced interactions
class PortfolioEnhancements {
  constructor() {
    this.setupSkillLevels();
    this.setupProjectHovers();
    this.setupTimelineAnimations();
    this.setupFormValidation();
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

  setupProjectHovers() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      const icon = card.querySelector('.project-icon');

      card.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
      });

      card.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
      });
    });
  }

  setupTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(12px)';
      });

      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
      });
    });
  }

  setupFormValidation() {
    // If there's a contact form in the future, add validation here
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Track email clicks for analytics if needed
        console.log('Email link clicked');
      });
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const portfolio = new Portfolio();
  const enhancements = new PortfolioEnhancements();

  // Add smooth page transitions
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);

  // Performance optimization: Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
});

// Handle browser back/forward navigation
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.section) {
    const portfolio = new Portfolio();
    portfolio.showSection(e.state.section);
    portfolio.updateNavigation(e.state.section);
  }
});

// Export for potential external use
window.Portfolio = Portfolio;