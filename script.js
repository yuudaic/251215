document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Background Change on Scroll ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // --- Hamburger Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Animate hamburger lines if needed, or just toggle class
    });

    // Close menu when link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // --- Back to Top Button ---
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Show after scrolling 500px
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Simple Scroll Animation (Fade In) ---
    // Using Intersection Observer API
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select all elements with data-aos
    const aosElements = document.querySelectorAll('[data-aos]');
    
    // Add initial styles for animation
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        [data-aos] {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        [data-aos].aos-animate {
            opacity: 1;
            transform: translateY(0);
        }
        [data-aos="fade-right"] { transform: translateX(-20px); }
        [data-aos="fade-left"] { transform: translateX(20px); }
        [data-aos="zoom-in"] { transform: scale(0.95); }
        
        [data-aos].aos-animate[data-aos] { transform: none; }
    `;
    document.head.appendChild(styleSheet);

    aosElements.forEach(el => {
        observer.observe(el);
    });

});
