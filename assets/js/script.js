'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});

/*Slogans animation*/
let currentQuoteIndex = 0;

function changeQuote() {
    const quotes = document.querySelectorAll('.quote');

    // Fade out and slide out the current quote
    quotes[currentQuoteIndex].style.animation = 'slideOut 0.5s forwards';

    // Set a timeout to allow the slide-out to complete before changing the quote
    setTimeout(() => {
        quotes[currentQuoteIndex].classList.remove('active');
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quotes[currentQuoteIndex].classList.add('active');
        quotes[currentQuoteIndex].style.animation = 'slideIn 0.5s forwards'; // Slide in the next quote
    }, 500); // Match the timeout to the duration of the slide-out animation
}

// Auto change quote every 5 seconds
setInterval(changeQuote, 5000);

// Define an array of objects containing the image paths and titles
const services = [
  {
    title: "Delight Pizza",
    image: "./assets/images/cuisines/13.jpg",
    alt: "Delight Pizza",
  },
  {
    title: "Veg.Cheese Burger",
    image: "./assets/images/cuisines/12.jpg",
    alt: "Veg.Cheese Burger",
  },
  {
    title: "Falooda",
    image: "./assets/images/cuisines/15.jpg",
    alt: "Falooda",
  },
  {
    title: "Special Dosa",
    image: "./assets/images/cuisines/3.jpg",
    alt: "Special Dosa",
  },
  {
    title: "Jeeni Roll",
    image: "./assets/images/cuisines/17.jpg",
    alt: "Jeeni Roll",
  },
  {
    title: "Dragon Paneer",
    image: "./assets/images/cuisines/1.jpg",
    alt: "Dragon Paneer",
  },
  {
    title: "Pav Bhaji",
    image: "./assets/images/cuisines/11.jpg",
    alt: "Pav Bhaji",
  },
  {
    title: "Thatte Idli",
    image: "./assets/images/cuisines/5.jpg",
    alt: "Thatte Idli",
  },
  {
    title: "Chole Bhature",
    image: "./assets/images/cuisines/16.jpg",
    alt: "Chole Bhature",
  }


];

let currentIndices = [0, 1, 2]; // Start with the first three services
const changeInterval = 5000; // 5 seconds
const transitionTime = 1000; // 1 second fade transition

// Function to change the service card content
function changeService() {
  // Get all service cards
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card, index) => {
    const imgElement = card.querySelector(".card-banner img");
    const titleElement = card.querySelector(".card-title a");

    // Fade-out the content by adding the hidden class
    card.querySelector(".card-banner").classList.add("hidden");
    card.querySelector(".card-content").classList.add("hidden");

    // Wait for the fade-out to finish (1 second), then change content
    setTimeout(() => {
      const serviceIndex = currentIndices[index];

      // Update the image and title
      imgElement.src = services[serviceIndex].image;
      imgElement.alt = services[serviceIndex].alt;
      titleElement.textContent = services[serviceIndex].title;

      // After content update, fade-in by removing the hidden class
      card.querySelector(".card-banner").classList.remove("hidden");
      card.querySelector(".card-content").classList.remove("hidden");
    }, transitionTime); // Wait for fade-out to finish
  });

  // Update indices for the next cycle
  currentIndices = currentIndices.map(i => (i + 3) % services.length);
}

// Initial service change
changeService();

// Set an interval to automatically change the content every 5 seconds
setInterval(changeService, changeInterval);

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
}