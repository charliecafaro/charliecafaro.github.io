/**
 * Portfolio Navigation & Interactions
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
      
      .text-block:nth-child(1) { transition-delay: 0.1s; }
      .text-block:nth-child(2) { transition-delay: 0.2s; }
      .text-block:nth-child(3) { transition-delay: 0.3s; }
      
      .timeline-item:nth-child(1) { transition-delay: 0.1s; }
      .timeline-item:nth-child(2) { transition-delay: 0.2s; }
      .timeline-item:nth-child(3) { transition-delay: 0.3s; }
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
    this.setupHoverEffects();
    this.setupEmailTracking();
    this.setupKeyboardNavigation();
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

    // Skill item hover effects
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-2px) scale(1.02)';
      });

      item.addEventListener('mouseleave', () => {
        item.style.transform = '';
      });
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

  setupKeyboardNavigation() {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
      // Escape key closes mobile menu
      if (e.key === 'Escape') {
        const sidebar = document.querySelector('.sidebar');
        const toggle = document.querySelector('.mobile-toggle');

        if (sidebar && sidebar.classList.contains('mobile-open')) {
          sidebar.classList.remove('mobile-open');
          if (toggle) {
            const icon = toggle.querySelector('i');
            if (icon) {
              icon.className = 'fas fa-bars';
            }
          }
        }
      }

      // Number keys (1-7) for quick navigation
      const numKey = parseInt(e.key);
      if (numKey >= 1 && numKey <= 7 && !e.ctrlKey && !e.altKey) {
        const sections = ['about', 'skills', 'projects', 'gallery', 'experience', 'education', 'contact'];
        const targetSection = sections[numKey - 1];

        if (targetSection && window.portfolioInstance) {
          window.portfolioInstance.showSection(targetSection);
          window.portfolioInstance.updateNavigation(targetSection);
        }
      }
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

  // Store portfolio instance globally for debugging and keyboard navigation
  window.portfolioInstance = portfolio;

  // Add helpful console message
  console.log('🎮 Charlie Cafaro Portfolio loaded successfully!');
  console.log('💡 Tips: Use number keys 1-7 for quick navigation, ESC to close mobile menu');
});

// Handle browser navigation
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.section && window.portfolioInstance) {
    window.portfolioInstance.showSection(e.state.section);
    window.portfolioInstance.updateNavigation(e.state.section);
  }
});

// Performance optimization - preload critical resources
window.addEventListener('load', () => {
  // Preload video thumbnails or other assets if needed
  const videoPlaceholders = document.querySelectorAll('.video-placeholder');

  videoPlaceholders.forEach(placeholder => {
    // Add subtle animation to indicate interactivity
    placeholder.style.transition = 'all 0.3s ease';
  });
});

// --- Skills V2 Rendering ---
let skillsV2, languages;

(async () => {
  try {
    const mod = await import("./user-data/data.js");
    skillsV2 = mod.skillsV2;
    languages = mod.languages;
    // Only construct the skills UI if the nodes exist:
    if (document.getElementById("skills-grid")) new SkillsRenderer();
  } catch (e) {
    console.warn("Skills module not loaded; nav/UI still functional.", e);
  }
})();

class SkillsRenderer {
  constructor() {
    this.grid = document.getElementById("skills-grid");
    this.filters = document.getElementById("skills-filters");
    this.search = document.getElementById("skills-search");
    this.langList = document.getElementById("skills-languages");
    this.activeFilter = "all";
    this.data = skillsV2 || [];
    this.bind();
    this.render();
    this.renderLanguages();
  }

  bind() {
    if (this.filters) {
      this.filters.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-chip");
        if (!btn) return;
        Array.from(this.filters.querySelectorAll(".filter-chip")).forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeFilter = btn.dataset.filter;
        this.render();
      });
    }
    if (this.search) {
      this.search.addEventListener("input", () => this.render());
    }
  }

  renderLanguages() {
    if (!this.langList || !Array.isArray(languages)) return;
    this.langList.innerHTML = "";
    languages.forEach(l => {
      const li = document.createElement("li");
      li.className = "language-pill";
      li.textContent = `${l.name} — ${l.level}`;
      this.langList.appendChild(li);
    });
  }

  render() {
    if (!this.grid) return;
    const q = (this.search?.value || "").trim().toLowerCase();
    this.grid.innerHTML = "";

    const groups = this.data.filter(g =>
        this.activeFilter === "all" || g.group === this.activeFilter
    );

    const frag = document.createDocumentFragment();

    groups.forEach(group => {
      const groupEl = document.createElement("section");
      groupEl.className = "skill-group";
      groupEl.setAttribute("aria-labelledby", `h-${group.group.replace(/\s+/g, "-")}`);

      const h = document.createElement("h3");
      h.className = "group-title";
      h.id = `h-${group.group.replace(/\s+/g, "-")}`;
      h.textContent = group.group;

      const wrap = document.createElement("div");
      wrap.className = "skill-chip-wrap";

      group.items
          .filter(it => !q || it.name.toLowerCase().includes(q) || it.tags?.some(t => t.toLowerCase().includes(q)))
          .forEach(it => wrap.appendChild(this.makeChip(it)));

      // Hide empty groups after search
      if (wrap.children.length) {
        groupEl.append(h, wrap);
        frag.appendChild(groupEl);
      }
    });

    // Empty state
    if (!frag.children.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "No skills match your search.";
      this.grid.appendChild(empty);
    } else {
      this.grid.appendChild(frag);
    }
  }

  makeChip(it) {
    const chip = document.createElement("button");
    chip.className = "skill-chip";
    chip.type = "button";
    chip.setAttribute("aria-label", `${it.name} (${it.type})`);

    // Left icon (pick a sensible FA fallback by type)
    const icon = document.createElement("i");
    icon.className = this.iconFor(it.type);
    icon.setAttribute("aria-hidden", "true");

    const name = document.createElement("span");
    name.className = "skill-chip-name";
    name.textContent = it.name;

    const badge = document.createElement("span");
    badge.className = "skill-chip-badge";
    badge.textContent = it.type;

    const tags = document.createElement("span");
    tags.className = "skill-chip-tags";
    tags.textContent = (it.tags && it.tags.length) ? it.tags.join(" • ") : "";

    chip.append(icon, name, badge, tags);
    return chip;
  }

  iconFor(type) {
    switch (type) {
      case "Engine": return "fas fa-cube";
      case "Language": return "fas fa-code";
      case "3D": return "fas fa-cubes";
      case "Animation": return "fas fa-person-running";
      case "Rendering": return "fas fa-wand-magic-sparkles";
      case "Tooling": return "fas fa-screwdriver-wrench";
      case "Suite": return "fas fa-shapes";
      case "2D": return "fas fa-palette";
      case "Texturing": return "fas fa-fill-drip";
      case "3D DCC": return "fas fa-cubes";
      default: return "fas fa-circle";
    }
  }
}

// Boot skills after your Portfolio init
window.addEventListener("DOMContentLoaded", () => {
  // If your Portfolio class already runs here, keep it.
  try { new SkillsRenderer(); } catch (e) { console.warn(e); }
});

// Export for external use
window.Portfolio = Portfolio;

