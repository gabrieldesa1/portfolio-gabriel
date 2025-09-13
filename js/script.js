// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const aboutImage = document.getElementById('about-image');

function updateTheme() {
    const icon = modeToggle.querySelector('i');
    const isDark = body.classList.contains('dark');

    if (isDark) {
        icon.className = 'bx bx-sun';
        aboutImage.src = 'imgs/program-dark.jpg';
    } else {
        icon.className = 'bx bx-moon';
        aboutImage.src = 'imgs/program-light.jpg';
    }
}

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('night-mode');
    updateTheme();

});

// Contact Form Submission (Simple JS for demo)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Thank you for your message, ' + name + '! I\'ll get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fadeInUp to elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
        }
    });
});

document.querySelectorAll('.animate-fadeInUp').forEach(el => observer.observe(el));