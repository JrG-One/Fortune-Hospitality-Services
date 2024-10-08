// Smooth scroll to the certificates section
document.querySelector('.certificates h2').addEventListener('click', function() {
    document.querySelector('.certificates').scrollIntoView({ behavior: 'smooth' });
});

// Function to handle fade-in effect
const fadeInElements = document.querySelectorAll('.certificate-card');
const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    element.classList.add('fade-in'); // Initially set to fade-in
    observer.observe(element);
});

// Modal functionality
const modal = document.getElementById('certificateModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');

// Show modal when a certificate card is clicked
document.querySelectorAll('.certificate-card a').forEach(card => {
    card.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const imageUrl = card.getAttribute('href'); // Get the image URL from the link
        modalTitle.textContent = card.querySelector('h3').textContent; // Set the modal title
        modalDescription.textContent = "Click on the image to view it."; // Modal description
        modal.style.display = 'block'; // Show modal
        const img = new Image();
        img.src = imageUrl; // Load the image
        img.onload = () => {
            const imgModal = document.createElement('img');
            imgModal.src = imageUrl;
            imgModal.style.width = '100%'; // Make the image responsive
            imgModal.style.borderRadius = '8px'; // Rounded corners
            modalDescription.innerHTML = ''; // Clear previous description
            modalDescription.appendChild(imgModal); // Add image to modal
        };
    });
});

// Close modal when the close button is clicked
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});