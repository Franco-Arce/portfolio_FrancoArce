// ========== Typewriter Effect ==========
const typewriterText = document.getElementById('typewriter-text');
const phrases = [
    'DATA ANALYST',
    'DATA ENGINEER',
    'AUTOMATIONS',
    'BI SPECIALIST',
    'DATA STORYTELLER'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }

    setTimeout(typeWriter, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeWriter, 1000);
});

// ========== Avatar Interactions ==========
const avatar = document.getElementById('avatar');

if (avatar) {
    // Avatar "Rubber Hose" float effect is mostly CSS but we can add a subtle mouse follow
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const avatarRect = avatar.getBoundingClientRect();
            const avatarCenterX = avatarRect.left + avatarRect.width / 2;
            const avatarCenterY = avatarRect.top + avatarRect.height / 2;

            const deltaX = (e.clientX - avatarCenterX) / 60;
            const deltaY = (e.clientY - avatarCenterY) / 60;

            avatar.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${deltaX * 0.5}deg)`;
        }
    });

    avatar.addEventListener('click', () => {
        avatar.style.animation = 'none';
        void avatar.offsetWidth; // Trigger reflow
        avatar.style.animation = 'masterJitter 0.2s steps(2) infinite, bounce 0.6s ease';

        setTimeout(() => {
            avatar.style.animation = 'masterJitter 0.3s steps(4) infinite';
        }, 600);
    });
}

// ========== Smooth Scroll ==========
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

// ========== Simple Intersection Observer ==========
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .skill-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.4s steps(4)';
        observer.observe(el);
    });
});
