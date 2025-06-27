// Particle.js Configuration
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#9b87f5'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#9b87f5',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    }
  },
  retina_detect: true
});

// Темная тема
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
});


const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  root.classList.add('dark');
}



// Карусель

document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");

  
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  });

  
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
});


































// Контактная форма
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}
// Навбар
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    return;
  }
  
  if (currentScroll > lastScroll) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});



//карусель
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.portfolio-items');
  const items = document.querySelectorAll('.portfolio-item');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');

  const itemWidth = items[0].offsetWidth + 20; 
  let currentIndex = 0;

  function moveCarousel(direction) {
    if (direction === 'next') {
      if (currentIndex < items.length - 3) { 
        currentIndex += 1.1; 
      } else {
        currentIndex = items.length - 3; 
      }
    } else if (direction === 'prev') {
      if (currentIndex > 0) { 
        currentIndex -= 2; 
      } else {
        currentIndex = 0; 
      }
    }
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  prevButton.addEventListener('click', () => moveCarousel('prev'));
  nextButton.addEventListener('click', () => moveCarousel('next'));
});




// Анимация прогресс-баров
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBar = entry.target;
      const percent = skillBar.dataset.percent;
      skillBar.style.setProperty('--progress-width', `${percent}%`);
      skillBar.classList.add('in-view');
      observer.unobserve(skillBar);
    }
  });
};

const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const skillBarObserver = new IntersectionObserver(animateSkillBars, observerOptions);

skillBars.forEach(skillBar => {
  skillBarObserver.observe(skillBar);
});
















// Открытие/закрытие мобильного меню
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
  
  // Блокировка прокрутки при открытом меню
  if (navLinks.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});