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

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

    }

});

// =========================================
// Email Validation Pattern
// =========================================

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// =========================================
// Contact Form Validation
// =========================================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const message = messageInput.value.trim();

    formMessage.textContent = "";

    if (name === "") {

        formMessage.style.color = "red";

        formMessage.textContent = "Please enter your name.";

        return;

    }

    if (email === "") {

        formMessage.style.color = "red";

        formMessage.textContent = "Please enter your email.";

        return;

    }

    if (!emailPattern.test(email)) {

        formMessage.style.color = "red";

        formMessage.textContent = "Please enter a valid email address.";

        return;

    }

    if (message === "") {

        formMessage.style.color = "red";

        formMessage.textContent = "Please enter your message.";

        return;

    }

    formMessage.style.color = "green";

    formMessage.textContent = "Message sent successfully!";

    form.reset();

});