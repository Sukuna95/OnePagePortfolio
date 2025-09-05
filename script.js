// =========================
// Smooth Scrolling for Nav Links
// =========================
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') !== '#') {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        }
    });
});

// =========================
// Fade-in Animation on Scroll
// =========================
const faders = document.querySelectorAll('.project, .card, .hero');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        }
    });
});

faders.forEach(fader => {
    observer.observe(fader);
});

// =========================
// Active Navigation Highlight
// =========================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
        }
    });
});

// =========================
// Project Card Hover Effects
// =========================
const projectCards = document.querySelectorAll('.project');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});


