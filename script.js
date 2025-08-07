const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Update year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Caravaggio Background Scroll Effects
class CaravaggioScrollEffects {
  constructor() {
    this.init();
  }

  init() {
    this.setupBackgroundImage();
    this.setupScrollEffects();
    this.setupScrollReveal();
  }

  setupBackgroundImage() {
    // Create background element if it doesn't exist
    if (!document.querySelector('.caravaggio-background')) {
      const background = document.createElement('div');
      background.className = 'caravaggio-background';
      
      const img = document.createElement('img');
      img.alt = 'Caravaggio painting background';
      
      // Set image source based on page
      const pageName = this.getPageName();
      img.src = this.getCaravaggioImage(pageName);
      
      // Add error handling
      img.onerror = () => {
        console.log('Failed to load Caravaggio image, trying fallback...');
        img.src = this.getFallbackImage();
      };
      
      // Add loading event
      img.onload = () => {
        console.log('Caravaggio background loaded successfully');
        background.style.opacity = '1';
      };
      
      background.appendChild(img);
      background.style.opacity = '0';
      background.style.transition = 'opacity 1s ease-in-out';
      
      document.body.insertBefore(background, document.body.firstChild);
      document.body.classList.add(`page-${pageName}`);
    }
  }

  getPageName() {
    const path = window.location.pathname;
    if (path.includes('home.html') || path.endsWith('/') || path.includes('index.html')) return 'home';
    if (path.includes('projects.html')) return 'projects';
    if (path.includes('about.html')) return 'about';
    if (path.includes('contact.html')) return 'contact';
    return 'home';
  }

  getCaravaggioImage(pageName) {
    const images = {
      home: '../gallery/caravaggio/the_card_shards.jpg',
      projects: '../gallery/caravaggio/david_goliath.jpg',
      about: '../gallery/caravaggio/sacrifce_of_isac.jpg',
      contact: '../gallery/caravaggio/crowning.jpg'
    };
    return images[pageName] || images.home;
  }
  
  getFallbackImage() {
    // Fallback to a solid color or simple pattern if images fail to load
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMzMzMzMzO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM2NjY2NjY7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8L3N2Zz4K';
  }

  setupScrollEffects() {
    // Wait a bit for the image to be created
    setTimeout(() => {
      const backgroundImg = document.querySelector('.caravaggio-background img');
      if (!backgroundImg) {
        console.log('Background image not found for scroll effects');
        return;
      }

      let ticking = false;

      const updateBackgroundTransform = () => {
        const scrollY = window.pageYOffset;
        const parallaxSpeed = 0.5;
        const zoomSpeed = 0.0002;
        
        // Parallax effect
        const translateY = scrollY * parallaxSpeed;
        
        // Subtle zoom effect based on scroll
        const scale = 1.1 + (scrollY * zoomSpeed);
        
        backgroundImg.style.transform = `translateY(${translateY}px) scale(${Math.min(scale, 1.3)})`;
        
        ticking = false;
      };

      const requestScrollUpdate = () => {
        if (!ticking) {
          requestAnimationFrame(updateBackgroundTransform);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    }, 100);
  }

  setupScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Add scroll-reveal class to elements that should animate
    const revealElements = document.querySelectorAll('section, .project, .skill-category, .caravaggio-piece');
    revealElements.forEach((el, index) => {
      el.classList.add('scroll-reveal');
      if (index % 3 === 1) el.classList.add('delay-1');
      if (index % 3 === 2) el.classList.add('delay-2');
      observer.observe(el);
    });
  }
}

// Initialize Caravaggio effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing Caravaggio background effects...');
  new CaravaggioScrollEffects();
});

// Add a simple test function to verify the background is working
window.testCaravaggioBackground = function() {
  const bg = document.querySelector('.caravaggio-background');
  const img = document.querySelector('.caravaggio-background img');
  console.log('Background element:', bg);
  console.log('Image element:', img);
  if (img) {
    console.log('Image src:', img.src);
    console.log('Image loaded:', img.complete);
    console.log('Image natural dimensions:', img.naturalWidth, 'x', img.naturalHeight);
  }
};

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
