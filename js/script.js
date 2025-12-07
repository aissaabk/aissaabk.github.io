// ===== DOM Elements =====
const sections = document.querySelectorAll('section');
const langButtons = document.querySelectorAll('.lang-selector button');
const scrollProgress = document.createElement('div');
const backToTopBtn = document.createElement('button');
const loadingScreen = document.createElement('div');
const loader = document.createElement('div');

// ===== Current Language =====
let currentLang = 'ar';

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initScrollProgress();
    initBackToTop();
    initIntersectionObserver();
    initParticles();
    initScrollEffects();
    
    // Set initial language
    setLanguage('ar');
    
    // Add typing effect to hero text
    addTypingEffect();
    
    // Hide loading screen after 1.5 seconds
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ===== Loading Screen =====
function initLoadingScreen() {
    loadingScreen.className = 'loading-screen';
    loader.className = 'loader';
    loadingScreen.appendChild(loader);
    document.body.appendChild(loadingScreen);
}

// ===== Scroll Progress Bar =====
function initScrollProgress() {
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = `${scrolled}%`;
    });
}

// ===== Back to Top Button =====
function initBackToTop() {
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    document.body.appendChild(backToTopBtn);
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
}

// ===== Intersection Observer for Section Animations =====
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.service, .skill, .project, .review');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
        
        // Prepare child elements for animation
        const children = section.querySelectorAll('.service, .skill, .project, .review');
        children.forEach(child => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(20px)';
            child.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    });
}

// ===== Language Switching =====
function setLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    langButtons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(lang)) {
            btn.classList.add('active');
            btn.style.opacity = '1';
        } else {
            btn.classList.remove('active');
            btn.style.opacity = '0.7';
        }
    });
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-ar]').forEach(element => {
        if (element.hasAttribute(`data-${lang}`)) {
            const newText = element.getAttribute(`data-${lang}`);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = newText;
            } else if (element.tagName === 'BUTTON') {
                element.textContent = newText;
            } else {
                element.textContent = newText;
            }
        }
    });
    
    // Update direction for RTL/LTR
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
    } else if (lang === 'fr' || lang === 'en') {
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
    }
    
    // Add language change animation
    document.body.style.opacity = '0.7';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.3s ease';
    }, 50);
}

// ===== Particles Background =====
function initParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 5 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// ===== Scroll Effects =====
function initScrollEffects() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Parallax effect for hero section
        if (document.querySelector('.hero')) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            document.querySelector('.hero').style.transform = `translateY(${rate}px)`;
        }
        
        // Scale effect for profile image
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            const scale = 1 - (currentScroll * 0.001);
            profileImg.style.transform = `scale(${Math.max(scale, 0.8)})`;
        }
        
        // Header shadow on scroll
        if (currentScroll > 100) {
            document.querySelector('.lang-selector').style.boxShadow = 'var(--shadow-lg)';
        } else {
            document.querySelector('.lang-selector').style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ===== Typing Effect =====
function addTypingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.classList.add('typing-effect');
    }
}

// ===== Form Submission =====
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = getTranslation('إرسال...', 'Sending...', 'Envoi en cours...');
        submitBtn.disabled = true;
        
        // Simulate sending (replace with actual API call)
        setTimeout(() => {
            alert(getTranslation(
                'شكراً لك! سأتواصل معك قريباً.',
                'Thank you! I will contact you soon.',
                'Merci ! Je vous contacterai bientôt.'
            ));
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
        }, 2000);
    });
}

// ===== Utility Functions =====
function getTranslation(ar, en, fr) {
    switch (currentLang) {
        case 'ar': return ar;
        case 'en': return en;
        case 'fr': return fr;
        default: return ar;
    }
}

// ===== Mouse Move Effect =====
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.width = '10px';
    cursor.style.height = '10px';
    cursor.style.backgroundColor = 'var(--primary-color)';
    cursor.style.borderRadius = '50%';
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.opacity = '0.5';
    
    document.body.appendChild(cursor);
    
    // Remove cursor after animation
    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// ===== Add Hover Sound Effects =====
const interactiveElements = document.querySelectorAll('.btn, .service, .project, .skill');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.05)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
});

// ===== Dark Mode Toggle (Optional) =====
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '30px';
darkModeToggle.style.right = '30px';
darkModeToggle.style.width = '50px';
darkModeToggle.style.height = '50px';
darkModeToggle.style.background = 'var(--gradient-primary)';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '50%';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.zIndex = '1000';
darkModeToggle.style.boxShadow = 'var(--shadow-lg)';

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#ffffff';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }
});

// Uncomment to enable dark mode toggle
// document.body.appendChild(darkModeToggle);
