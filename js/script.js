/**
 * Hanan Portfolio - Enhanced JavaScript
 * Features: Particles.js, Portfolio Filters, Animated Stats, Typed.js
 */

// ===== DOM ELEMENTS =====
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
const footerIconTop = document.querySelector('.footer-iconTop');

// ===== MOBILE MENU TOGGLE =====
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ===== SCROLL EVENTS =====
window.onscroll = () => {
    // Active section highlighting
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`header nav a[href*=${id}]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Show/hide scroll-to-top button
    if (footerIconTop) {
        footerIconTop.classList.toggle('visible', window.scrollY > 500);
    }

    // Close mobile menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ===== SCROLL REVEAL ANIMATION =====
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: false
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .tech-category', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.portfolio-filters', { origin: 'top', delay: 300 });
ScrollReveal().reveal('.github-stats', { origin: 'bottom', delay: 400 });

// ===== TYPED.JS - MULTIPLE ROLES =====
const typed = new Typed('.multiple-text', {
    strings: [
        'Fullstack Developer 💻',
        'DevOps Engineer 🚀',
        'MLOps Specialist 🤖',
        'Cloud Architect ☁️',
        'AI Enthusiast 🧠'
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1500,
    loop: true,
    smartBackspace: true
});

// ===== PARTICLES.JS CONFIGURATION =====
if (typeof particlesJS !== 'undefined') {
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
                value: '#0ef'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.3,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#0ef',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// ===== PORTFOLIO FILTER =====
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioBoxes.forEach(box => {
            const categories = box.getAttribute('data-category');
            
            if (filterValue === 'all' || categories.includes(filterValue)) {
                box.classList.remove('hidden');
                box.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                box.classList.add('hidden');
            }
        });
    });
});

// ===== ANIMATED COUNTER FOR STATS =====
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
};

// Intersection Observer for Stats Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
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
        // Close mobile menu after clicking
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// ===== TECH ICON HOVER ANIMATION =====
const techIcons = document.querySelectorAll('.tech-icon');
techIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-8px) scale(1.15) rotate(5deg)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    });
});

// ===== FORM VALIDATION =====
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = this.querySelector('input[name="Name"]');
        const email = this.querySelector('input[name="Email"]');
        const message = this.querySelector('textarea[name="Message"]');

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            e.preventDefault();
            alert('Please fill in all required fields.');
            return false;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            return false;
        }
    });
}

// ===== PRELOADER (Optional) =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== SKILL TAGS HOVER EFFECT =====
const skillTags = document.querySelectorAll('.skill-tags span');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.background = 'var(--main-color)';
        tag.style.color = 'var(--bg-color)';
        tag.style.transform = 'scale(1.1)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.background = 'rgba(0, 238, 255, 0.1)';
        tag.style.color = 'var(--main-color)';
        tag.style.transform = 'scale(1)';
    });
});

// ===== CONSOLE EASTER EGG =====
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; color: #0ef;');
console.log('%c🚀 Interested in working together? Contact me!', 'font-size: 14px; color: #fff;');
console.log('%c📧 wdhanan03@gmail.com', 'font-size: 12px; color: #aaa;');

// ===== LAZY LOADING FOR IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

// ===== THEME TOGGLE (Future Enhancement) =====
// Placeholder for light/dark mode toggle
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
};
initTheme();
