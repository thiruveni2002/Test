// Animations handler
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    
    // Scroll animations
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initial call for elements that might be in the viewport on load
    handleScrollAnimations();
    
    // Custom cursor
    initCustomCursor();
    
    // Coffee cup animation
    animateCoffeeCup();
});

// Initialize animations
function initAnimations() {
    // Add steam elements to coffee
    const coffee = document.querySelector('.coffee');
    if (coffee) {
        for (let i = 0; i < 3; i++) {
            const steam = document.createElement('div');
            steam.className = 'steam';
            coffee.appendChild(steam);
        }
    }
}

// Animate coffee cup
function animateCoffeeCup() {
    const coffee = document.querySelector('.coffee');
    if (coffee) {
        setTimeout(() => {
            coffee.classList.add('animate');
        }, 500);
    }
}

// Handle scroll animations
function handleScrollAnimations() {
    // Animate elements when scrolled into view
    const animElements = document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right');
    animElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
            element.classList.add('active');
        }
    });
    
    // Animate skill bars when scrolled into view
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    skillProgressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const isVisible = barTop < window.innerHeight - 100;
        
        if (isVisible && !bar.classList.contains('animate')) {
            const progress = bar.dataset.progress;
            bar.style.setProperty('--progress', progress);
            bar.classList.add('animate');
        }
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Custom cursor
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });
    
    // Add hover effect for links and buttons
    const links = document.querySelectorAll('a, button, .theme-toggle, .project-card, .social-icon');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.border = '2px solid var(--medium-coffee)';
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
            cursor.style.backgroundColor = 'var(--medium-coffee)';
            cursor.style.border = 'none';
            cursorFollower.style.width = '30px';
            cursorFollower.style.height = '30px';
        });
    });
    
    // Hide default cursor
    document.body.style.cursor = 'none';
}