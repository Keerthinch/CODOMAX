// Change heading color using DOM Manipulation
const heading = document.getElementById("heading");
heading.style.color = "blue";

// Button Event
const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeBtn.addEventListener("click", function () {
    welcomeMessage.innerHTML = "Welcome to my Portfolio, Keerthi! 😊";
    welcomeMessage.style.color = "green";
    welcomeMessage.style.fontWeight = "bold";
});

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

// Show button when scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Scroll smoothly to top
topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact Form Submit Event
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
    alert("Thank you! Your message has been submitted successfully.");
});