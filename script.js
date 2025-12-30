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

// Global start time capture
const globalStartTime = performance.now();

// ========== Smart Splash Screen ==========
window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const minDisplayTime = 3000; // Increased to 3s to ensure animation usually finishes

    // Calculate actual elapsed time from page start
    const elapsedTime = performance.now() - globalStartTime;
    const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

    // console.log(`Load took ${elapsedTime}ms. Waiting ${remainingTime}ms.`);

    setTimeout(() => {
        if (splashScreen) {
            splashScreen.classList.add('loaded');
            document.body.style.overflow = 'auto'; // Unlock scroll
            setTimeout(typeWriter, 500);
        }
    }, remainingTime);
});

// Fallback just in case load event hangs
setTimeout(() => {
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen && !splashScreen.classList.contains('loaded')) {
        splashScreen.classList.add('loaded');
        typeWriter();
    }
}, 5000); // Max wait 5 seconds

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

    // Initialize background shapes
    initBackgroundShapes();
});

/* ========== Background Shapes Generation ========== */
function initBackgroundShapes() {
    const container = document.querySelector('.decorative-stars');
    if (!container) return;

    // Clear existing static content
    container.innerHTML = '';

    const shapes = [
        { char: '★', type: 'star', count: 40 },
        { char: '+', type: 'cross', count: 20 },
        { char: '◆', type: 'diamond', count: 15 }
    ];

    shapes.forEach(shapeConfig => {
        for (let i = 0; i < shapeConfig.count; i++) {
            const el = document.createElement('div');
            el.classList.add('bg-shape', `shape-${shapeConfig.type}`);
            el.textContent = shapeConfig.char;

            // Random Position (0-100%)
            el.style.left = `${Math.random() * 100}%`;
            el.style.top = `${Math.random() * 100}%`;

            // Random Size Variation (relative to class defined size)
            // We use font-size because transform is used by animations
            const sizeMult = 0.5 + Math.random() * 1.0; // 0.5x to 1.5x
            el.style.fontSize = `${sizeMult * 1.5}rem`; // Base approx

            // Random Animation Properties to de-sync
            const delay = Math.random() * 5; // 0-5s delay
            const durationMult = 0.8 + Math.random() * 0.5; // 0.8x to 1.3x duration

            el.style.animationDelay = `${delay}s`;
            // We can't easily multiply CSS var duration without calc, but we can override it if we knew the base.
            // Instead, let's just set the delay which is enough to desync.

            // Random Opacity
            el.style.opacity = 0.1 + Math.random() * 0.4; // 0.1 to 0.5 (faint background)

            container.appendChild(el);
        }
    });
}
