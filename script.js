// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== TYPING EFFECT =====
const typingTexts = ['Full Stack Developer', 'UX/UI Designer', 'Software Development Student'];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector('.typing-text');

function typeEffect() {
    if (charIndex < typingTexts[textIndex].length) {
        typingElement.textContent += typingTexts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = typingTexts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(typeEffect, 500);
    }
}

// Iniciar después de que la página cargue
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 500);
});

// ===== READ MORE BUTTONS =====
document.querySelectorAll('.btn-readmore').forEach(button => {
    button.addEventListener('click', function() {
        const projectId = this.dataset.project;
        const descriptions = document.getElementById(`desc-${projectId}`);
        
        if (descriptions.classList.contains('active')) {
            descriptions.classList.remove('active');
            this.textContent = 'Read More';
        } else {
            // Cerrar otros
            document.querySelectorAll('.project-descriptions').forEach(desc => {
                desc.classList.remove('active');
            });
            document.querySelectorAll('.btn-readmore').forEach(btn => {
                btn.textContent = 'Read More';
            });
            
            descriptions.classList.add('active');
            this.textContent = 'Read Less';
        }
    });
});

// ===== SCROLL TOP BUTTON =====
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    }
}); 