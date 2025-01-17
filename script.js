// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah terkirim.');
    this.reset();
});

// Intersection Observer for animations
const observeElements = (elements) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style transform = 'translateY(0)';
            }
        });
    });

    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });
};

// Initialize animations
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.project-card, .timeline-item');
    observeElements(elements);
});

