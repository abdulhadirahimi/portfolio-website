// =========================================
// Hamburger Menu
// =========================================

const menuButton =
    document.getElementById("menu-toggle");

const navMenu =
    document.querySelector("nav ul");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});
// =========================================
// Portfolio Website JavaScript
// Author: Abdulhadi Rahimi
// =========================================


// =========================================
// Select Elements
// =========================================

const themeButton = document.getElementById("theme-toggle");

const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");

const formMessage = document.getElementById("form-message");


// =========================================
// Hamburger Menu Elements
// =========================================

const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.querySelector("nav ul");


// =========================================
// Hamburger Menu Toggle
// =========================================

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    menuToggle.textContent = isOpen
        ? "✕"
        : "☰";

});


// =========================================
// Close Mobile Menu When Link Is Clicked
// =========================================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";

    });

});


// =========================================
// Load Saved Theme
// =========================================

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️ Light Mode";

} else {

    themeButton.textContent = "🌙 Dark Mode";

}


// =========================================
// Dark Mode Toggle
// =========================================

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️ Light Mode";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


// =========================================
// Email Validation Pattern
// =========================================

const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// =========================================
// Contact Form Validation
// =========================================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        nameInput.value.trim();


    const email =
        emailInput.value.trim();


    const message =
        messageInput.value.trim();


    // Clear Previous Message

    formMessage.textContent = "";


    // =====================================
    // Name Validation
    // =====================================

    if (name === "") {

        formMessage.style.color = "red";

        formMessage.textContent =
            "Please enter your name.";

        return;

    }


    // =====================================
    // Email Empty Validation
    // =====================================

    if (email === "") {

        formMessage.style.color = "red";

        formMessage.textContent =
            "Please enter your email.";

        return;

    }


    // =====================================
    // Email Format Validation
    // =====================================

    if (!emailPattern.test(email)) {

        formMessage.style.color = "red";

        formMessage.textContent =
            "Please enter a valid email address.";

        return;

    }


    // =====================================
    // Message Validation
    // =====================================

    if (message === "") {

        formMessage.style.color = "red";

        formMessage.textContent =
            "Please enter your message.";

        return;

    }


    // =====================================
    // Success Message
    // =====================================

    formMessage.style.color = "green";

    formMessage.textContent =
        "Message sent successfully!";


    // Reset Form

    form.reset();

});