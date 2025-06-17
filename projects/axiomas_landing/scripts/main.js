// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Animate stats counters when section is visible
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed (lower = faster)

    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const count = +stat.innerText;
        const increment = target / speed;

        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            stat.innerText = '+' + target;
        }
    });
}

// Trigger on scroll
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    const sectionPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        animateCounters();
        window.removeEventListener('scroll', this);
    }
});

// Testimonial Carousel
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Click on dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-rotate every 5 seconds
setInterval(nextSlide, 4000);

// Initial display
showSlide(0);

// WhatsApp Form Submission
document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Format message for WhatsApp
    const encodedMessage = encodeURIComponent(
        `Hola Axiomas Contables, soy ${name}. ${message} ${phone ? `\nMi teléfono: ${phone}` : ''}`
    );

    // Redirect to WhatsApp
    window.open(`https://wa.me/5352719137?text=${encodedMessage}`, '_blank');

    // Optional: Reset form
    this.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});