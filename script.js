//Full Window Image Slider
let fullSlideIndex = 0;
let fullSlides = document.getElementsByClassName("full-slide");
showFullSlides();

function showFullSlides() {
    for (let i = 0; i < fullSlides.length; i++) {
        fullSlides[i].classList.remove("active");
    }
    fullSlideIndex++;
    if (fullSlideIndex > fullSlides.length) { fullSlideIndex = 1 }
    fullSlides[fullSlideIndex - 1].classList.add("active");
    setTimeout(showFullSlides, 5000); // Change slide every 5 seconds
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }

    // Shrink navbar on scroll
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
};

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})