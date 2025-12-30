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

    // Configuration
    const rows = 8; // Grid rows
    const cols = 6; // Grid columns
    const totalCells = rows * cols;

    // Probabilities
    const density = 0.65; // Chance to have a shape in a cell

    // Shapes pool
    const shapeTypes = ['star', 'star', 'star', 'cross', 'diamond']; // Weighting stars higher
    const shapeChars = {
        'star': '★',
        'cross': '+',
        'diamond': '◆'
    };

    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Random chance to skip cell (create gaps)
            if (Math.random() > density) continue;

            const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            const char = shapeChars[type];

            const el = document.createElement('div');
            el.classList.add('bg-shape', `shape-${type}`);
            el.textContent = char;

            // Base position: top-left of the cell
            const baseX = c * cellWidth;
            const baseY = r * cellHeight;

            // Random offset within the cell (padding to avoid edge clipping)
            const offsetX = Math.random() * (cellWidth * 0.6) + (cellWidth * 0.2);
            const offsetY = Math.random() * (cellHeight * 0.6) + (cellHeight * 0.2);

            el.style.left = `${baseX + offsetX}%`;
            el.style.top = `${baseY + offsetY}%`;

            // Random Size
            const sizeMult = 0.6 + Math.random() * 0.8;
            el.style.fontSize = `${sizeMult * 1.5}rem`;

            // Random Animation
            el.style.animationDelay = `${Math.random() * 5}s`;
            el.style.opacity = 0.1 + Math.random() * 0.4;

            container.appendChild(el);
        }
    }
}
