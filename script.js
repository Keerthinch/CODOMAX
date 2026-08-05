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

// Contact Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

alert("Thank you! Your message has been submitted successfully.");

form.reset();
});