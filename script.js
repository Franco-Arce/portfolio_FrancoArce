// ========== Modern Portfolio Logic 2026 - Cyber-Sleek Edition ==========

// ========== Preloader ==========
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Minimum display time for smooth UX
    const minDisplayTime = 800;
    const startTime = Date.now();

    // Safety timeout: force hide after 3 seconds if load event hasn't fired
    const safetyTimeout = setTimeout(() => {
        hidePreloader();
    }, 3000);

    function hidePreloader() {
        if (preloader.classList.contains('hidden')) return;
        clearTimeout(safetyTimeout);

        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(0, minDisplayTime - elapsed);

        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, remainingTime);
    }

    window.addEventListener('load', hidePreloader);
}

// Initialize preloader immediately
initPreloader();

// ========== Translation Data ==========
const translations = {
    es: {
        'nav.home': 'Inicio',
        'nav.expertise': 'Competencias',
        'nav.portfolio': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.contact': 'Contacto',
        'hero.subtitle': 'DATABASE DEVELOPER & DATA ENGINEER',
        'hero.cta1': 'Ver Impacto',
        'hero.cta2': 'Contactar',
        'expertise.title': 'Competencias',
        'expertise.card1.title': 'Bases de Datos & Arquitectura Cloud',
        'expertise.card1.desc1': 'Especializado en <strong>desarrollo de bases de datos</strong> e <strong>ingeniería de datos a gran escala</strong>. En <strong>Mercado Libre</strong>, me enfoco en diseñar modelos de datos de alta velocidad, tuneo de rendimiento SQL y pipelines distribuidos que transforman volúmenes masivos de datos en impacto directo de negocio.',
        'expertise.card1.desc2': 'Dominio avanzado de <strong>SQL</strong>, <strong>PostgreSQL / MySQL</strong>, <strong>Python</strong>, <strong>Microsoft Fabric</strong>, <strong>Azure Data Factory</strong> y <strong>Power BI</strong>, optimizando arquitecturas de datos de extremo a extremo.',
        'expertise.card2.title': 'Nivel Técnico',
        'impact.title': 'Impacto',
        'impact.p1.metric': '75% REDUCCIÓN',
        'impact.p1.title': 'Smart Scoring',
        'impact.p1.desc': 'Automatización del embudo de ventas para 5 universidades, procesando +50k registros en tiempo real con modelos ML predictivos.',
        'impact.p1.label1': 'Tiempo Manual',
        'impact.p1.label2': 'Leads Procesados',
        'impact.p1.label3': 'Universidades',
        'impact.p1.funnel1': 'Leads Ingresados',
        'impact.p1.funnel2': 'Calificados ML',
        'impact.p1.funnel3': 'Alta Probabilidad',
        'impact.p1.funnel4': 'Conversiones',
        'impact.p2.metric': 'REAL-TIME',
        'impact.p2.title': 'ClasificaLeads',
        'impact.p2.desc': 'Motor de clasificación de leads en WhatsApp. Detecta intención de compra y motivación profesional para separar SQLs de MQLs automáticamente.',
        'impact.p2.label1': 'Análisis',
        'impact.p2.label2': 'Clasificación',
        'impact.p2.label3': 'Integración',
        'impact.p3.metric': 'INTEGRAL',
        'impact.p3.title': 'Plataforma DataChef',
        'impact.p3.desc': 'Ecosistema completo de BI para el sector gastronómico: pipelines ETL automatizados + Dashboard con predicciones de demanda.',
        'impact.p3.label1': 'End-to-End',
        'impact.p3.label2': 'Actualizaciones',
        'impact.p3.label3': 'Reportes',
        'impact.p4.metric': '90% MENOS OPS',
        'impact.p4.title': 'Arquitectura ETL Empresarial',
        'impact.p4.desc': 'Ingesta y normalización automatizada de datos heterogéneos en entornos Cloud.',
        'impact.p4.label1': 'Carga Manual',
        'impact.p4.label2': 'Automatizado',
        'impact.p4.label3': 'Fuentes',
        'impact.p5.title': 'Conciliación Bancaria Automatizada',
        'impact.p5.desc': 'Automatización de conciliaciones bancarias, reduciendo errores humanos y tiempos de cierre contable mediante algoritmos de matching avanzado.',
        'impact.p5.label1': 'Tasa Match',
        'impact.p5.label2': 'Tiempo',
        'impact.p5.label3': 'Pendientes',
        'impact.p5.bank': 'Banco',
        'impact.p5.system': 'Sistema',
        'impact.p6.title': 'CodeFlow Capital',
        'impact.p6.desc': 'Plataforma de finanzas personales con gamificación, transformando el control de gastos en una experiencia atractiva con niveles de XP y logros.',
        'impact.p6.label1': 'Experiencia',
        'impact.p6.label2': 'Importar',
        'impact.p6.label3': 'Estado',
        'impact.btn.demo': '▶ Ver Demo',
        'impact.btn.github': 'GitHub',
        'impact.btn.contact': 'Contactar',
        'impact.btn.viewapp': '▶ Ver App',
        'experience.title': 'Experiencia',
        'experience.e0.period': 'Abril 2026 - Presente',
        'experience.e0.title': 'Database Developer & Data Engineer',
        'experience.e0.sub1': 'Desarrollo y Optimización de Bases de Datos',
        'experience.e0.list1': '<strong>Bases de Datos a Escala:</strong> Diseño, modelado y afinamiento de rendimiento en arquitecturas de bases de datos relacionales y no relacionales a escala masiva dentro del ecosistema e-commerce.',
        'experience.e0.list2': '<strong>Optimización de Consultas:</strong> Análisis y tuneo de queries SQL complejas, índices y estructuras de almacenamiento para maximizar el throughput y reducir tiempos de respuesta a milisegundos.',
        'experience.e0.sub2': 'Ingeniería de Datos y Data Pipelines',
        'experience.e0.list3': '<strong>Pipelines Escalables:</strong> Construcción, monitoreo y mantenimiento de flujos de datos distribuidos garantizando alta disponibilidad, integridad y consistencia.',
        'experience.e0.list4': '<strong>Integración y Gobernanza:</strong> Implementación de estándares de gobernanza, calidad de datos y automatizaciones avanzadas para soportar la toma de decisiones estratégicas.',
        'experience.e1.period': 'Ago 2025 - Mar 2026',
        'experience.e1.title': 'Analytics Engineer / Data Analyst',
        'experience.e1.desc1': 'Liderazgo técnico en la implementación de <strong>Microsoft Fabric</strong>.',
        'experience.e1.desc2': 'Diseño de arquitecturas Lakehouse y optimización de pipelines reduciendo latencia en un 75%.',
        'experience.e2.period': 'Ene - Jul 2024',
        'experience.e2.title': 'Data Analyst',
        'experience.e2.company': 'No Country',
        'experience.e2.desc': 'Análisis estratégico de clientes y tendencias de mercado con Python, Excel y Power BI. Optimización de decisiones basadas en datos.',
        'experience.e3.period': 'Feb - Ago 2025',
        'experience.e3.title': 'Soporte IT',
        'experience.e3.desc': 'Optimización operativa mediante análisis de incidencias y automatización de reportes.',
        'contact.title': 'Conectar',
        'contact.email': 'Enviar Email',
        'footer': '© 2026 FRANCO ARCE | ENGINEERING INTELLIGENCE'
    },
    en: {
        'nav.home': 'Home',
        'nav.expertise': 'Expertise',
        'nav.portfolio': 'Portfolio',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'hero.subtitle': 'DATABASE DEVELOPER & DATA ENGINEER',
        'hero.cta1': 'View Impact',
        'hero.cta2': 'Get in Touch',
        'expertise.title': 'Expertise',
        'expertise.card1.title': 'Databases & Cloud Architecture',
        'expertise.card1.desc1': 'Specialized in <strong>database development</strong> and <strong>large-scale data engineering</strong>. At <strong>Mercado Libre</strong>, I focus on designing high-speed data models, SQL performance tuning, and distributed pipelines that transform massive data volumes into direct business impact.',
        'expertise.card1.desc2': 'Advanced mastery of <strong>SQL</strong>, <strong>PostgreSQL / MySQL</strong>, <strong>Python</strong>, <strong>Microsoft Fabric</strong>, <strong>Azure Data Factory</strong>, and <strong>Power BI</strong>, optimizing end-to-end data architectures.',
        'expertise.card2.title': 'Technical Power Level',
        'impact.title': 'Impact',
        'impact.p1.metric': '75% REDUCTION',
        'impact.p1.title': 'Smart Lead Scoring System',
        'impact.p1.desc': 'Sales funnel automation for 5 universities, processing +50k records in real-time with predictive ML models.',
        'impact.p1.label1': 'Manual Time',
        'impact.p1.label2': 'Leads Processed',
        'impact.p1.label3': 'Universities',
        'impact.p1.funnel1': 'Leads Entered',
        'impact.p1.funnel2': 'ML Qualified',
        'impact.p1.funnel3': 'High Probability',
        'impact.p1.funnel4': 'Conversions',
        'impact.p2.metric': '98% ACCURACY',
        'impact.p2.title': 'Neural Fraud Detection',
        'impact.p2.desc': 'Massive transaction classification for financial risk mitigation.',
        'impact.p2.label1': 'Accuracy',
        'impact.p2.label2': 'Transactions',
        'impact.p2.label3': 'False Positives',
        'impact.p2.gauge': 'Model Accuracy',
        'impact.p3.metric': 'END-TO-END',
        'impact.p3.title': 'DataChef Platform',
        'impact.p3.desc': 'Complete BI ecosystem for the restaurant sector: automated ETL pipelines + Dashboard with demand forecasting.',
        'impact.p3.label1': 'End-to-End',
        'impact.p3.label2': 'Updates',
        'impact.p3.label3': 'Reports',
        'impact.p4.metric': '90% LESS OPS',
        'impact.p4.title': 'Enterprise ETL Architecture',
        'impact.p4.desc': 'Automated ingestion and normalization of heterogeneous data in Cloud environments.',
        'impact.p4.label1': 'Manual Load',
        'impact.p4.label2': 'Automated',
        'impact.p4.label3': 'Sources',
        'impact.p5.title': 'Automated Bank Reconciliation',
        'impact.p5.desc': 'Bank reconciliation automation, reducing human errors and accounting close times through advanced matching algorithms.',
        'impact.p5.label1': 'Match Rate',
        'impact.p5.label2': 'Time',
        'impact.p5.label3': 'Pending',
        'impact.p5.bank': 'Bank',
        'impact.p5.system': 'System',
        'impact.p6.title': 'CodeFlow Capital',
        'impact.p6.desc': 'Personal finance platform with gamification, transforming budget tracking into an engaging experience with XP levels and achievements.',
        'impact.p6.label1': 'Experience',
        'impact.p6.label2': 'Import',
        'impact.p6.label3': 'Status',
        'impact.btn.demo': '▶ View Demo',
        'impact.btn.github': 'GitHub',
        'impact.btn.contact': 'Contact',
        'impact.btn.viewapp': '▶ View App',
        'experience.title': 'Experience',
        'experience.e0.period': 'April 2026 - Present',
        'experience.e0.title': 'Database Developer & Data Engineer',
        'experience.e0.sub1': 'Database Development & Optimization',
        'experience.e0.list1': '<strong>Databases at Scale:</strong> Design, modeling, and performance tuning for relational and non-relational database architectures at massive e-commerce scale.',
        'experience.e0.list2': '<strong>Query Optimization:</strong> Analysis and tuning of complex SQL queries, indexes, and storage structures to maximize throughput and achieve sub-second response times.',
        'experience.e0.sub2': 'Data Engineering & Data Pipelines',
        'experience.e0.list3': '<strong>Scalable Pipelines:</strong> Construction, monitoring, and maintenance of distributed data flows ensuring high availability, integrity, and consistency.',
        'experience.e0.list4': '<strong>Integration & Governance:</strong> Implementation of governance standards, data quality controls, and advanced automation to drive executive business decisions.',
        'experience.e1.period': 'Aug 2025 - Mar 2026',
        'experience.e1.title': 'Analytics Engineer / Data Analyst',
        'experience.e1.desc1': 'Technical leadership in <strong>Microsoft Fabric</strong> implementation.',
        'experience.e1.desc2': 'Lakehouse architecture design and pipeline optimization reducing latency by 75%.',
        'experience.e2.period': 'Jan - Jul 2024',
        'experience.e2.title': 'Data Analyst',
        'experience.e2.company': 'No Country',
        'experience.e2.desc': 'Strategic analysis of customers and market trends with Python, Excel and Power BI. Data-driven decision optimization.',
        'experience.e3.period': 'Feb - Aug 2025',
        'experience.e3.title': 'Support & Data Analyst',
        'experience.e3.desc': 'Operational optimization through incident analysis and report automation.',
        'contact.title': 'Connect',
        'contact.email': 'Email Me',
        'footer': '© 2026 FRANCO ARCE | ENGINEERING INTELLIGENCE'
    }
};

let currentLang = 'es';

// ========== Language Toggle ==========
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update toggle button
    const langCode = document.querySelector('.lang-code');
    if (langCode) {
        langCode.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    localStorage.setItem('portfolio-lang', lang);
}

function toggleLanguage() {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
}

// ========== Premium Scroll Reveal Animation ==========
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 80) {
                // Staggered animation delay based on index
                setTimeout(() => {
                    element.classList.add('visible');
                }, index * 100);
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Throttled scroll listener for performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                revealOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ========== Timeline Marker Animation ==========
function initTimelineAnimation() {
    const markers = document.querySelectorAll('.timeline-marker');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pulse');
            }
        });
    }, { threshold: 0.5 });

    markers.forEach(marker => observer.observe(marker));
}

// ========== Hero Parallax Effect ==========
function initHeroParallax() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < 600) {
            const parallaxY = scrollY * 0.3;
            const opacity = 1 - (scrollY / 500);

            if (heroTitle) {
                heroTitle.style.transform = `translateY(${parallaxY}px)`;
                heroTitle.style.opacity = Math.max(0, opacity);
            }
            if (heroSubtitle) {
                heroSubtitle.style.transform = `translateY(${parallaxY * 0.5}px)`;
                heroSubtitle.style.opacity = Math.max(0, opacity);
            }
        }
    });
}

// ========== Card Tilt Effect (Premium) ==========
function initCardTilt() {
    const cards = document.querySelectorAll('.project-card, .about-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ========== Glowing Cursor Trail ==========
function initCursorGlow() {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;

        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

// ========== Initialization ==========
window.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('portfolio-lang') || 'es';
    setLanguage(savedLang);

    // Set up language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // Initialize premium animations
    initScrollReveal();
    initTimelineAnimation();
    initHeroParallax();
    initCardTilt();
    initCursorGlow();
    initSkillsChart();
});

// ========== Smooth Navigation ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== Navbar Dynamic Background ==========
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(13, 13, 13, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        navbar.style.borderColor = 'rgba(58, 134, 255, 0.2)';
    } else {
        navbar.style.background = 'rgba(13, 13, 13, 0.7)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }
});

// ========== Skills Chart (Radar) ==========
function initSkillsChart() {
    const ctx = document.getElementById('skillsChart');
    if (!ctx) return;

    // Set global defaults for dark theme
    Chart.defaults.color = '#94A3B8';
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 13;

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['SQL / DB Dev', 'Python', 'Data Engineering', 'PostgreSQL / MySQL', 'Fabric / Azure', 'Power BI', 'ML'],
            datasets: [{
                label: 'Nivel Técnico',
                data: [98, 95, 92, 90, 85, 90, 85],
                fill: true,
                backgroundColor: 'rgba(58, 134, 255, 0.2)',
                borderColor: '#3A86FF',
                pointBackgroundColor: '#3A86FF',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#3A86FF'
            }]
        },
        options: {
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    pointLabels: {
                        color: '#94A3B8',
                        font: { weight: '600' }
                    },
                    ticks: { display: false, max: 100 },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// ========== Dashboard Carousel ==========
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.dashboard-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const indicators = document.querySelectorAll('.indicator');

    if (!track || slides.length === 0) return;

    let currentSlide = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        currentSlide = index;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update indicators
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === currentSlide);
        });
    }

    // Arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    }

    // Indicator navigation
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
        if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                goToSlide(currentSlide + 1); // Swipe left
            } else {
                goToSlide(currentSlide - 1); // Swipe right
            }
        }
    }
}

// Initialize carousel on DOM ready
document.addEventListener('DOMContentLoaded', initCarousel);
