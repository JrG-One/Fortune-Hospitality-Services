// Smooth Scroll for Navigation Links
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation for Job Listings
window.addEventListener('scroll', () => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const triggerBottom = window.innerHeight * 0.85;

    fadeIns.forEach(fade => {
        const fadeTop = fade.getBoundingClientRect().top;

        if (fadeTop < triggerBottom) {
            fade.classList.add('active');
        }
    });
});

// Function to display the application form modal
function showForm(jobTitle) {
    document.getElementById('application-modal').style.display = 'flex';
    document.getElementById('job-title').innerText = jobTitle;
}

// Function to close the application form modal
function closeForm() {
    document.getElementById('application-modal').style.display = 'none';
}

// Enhanced Form Validation
document.getElementById('apply-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    if (name === "" || email === "" || phone === "") {
        alert("All fields are required.");
        return;
    }

    // Basic Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert('Application submitted successfully!');
    closeForm();
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggler = document.querySelectorAll('[data-nav-toggler]');
    const navbarList = document.querySelector('.navbar-list');
    const overlay = document.querySelector('.overlay');

    navToggler.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            navbarList.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    });
});
