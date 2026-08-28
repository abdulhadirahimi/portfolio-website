// =========================================
// Portfolio Website JavaScript
// Author: Abdulhadi Rahimi
// =========================================


// =========================================
// Select Elements
// =========================================

const themeButton = document.getElementById("theme-toggle");

const menuButton = document.getElementById("menu-toggle");

const navMenu = document.querySelector("nav ul");

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

    if (themeButton) {
        themeButton.textContent = "☀️ Light";
    }

} else {

    if (themeButton) {
        themeButton.textContent = "🌙 Dark";
    }

}

// Dark Mode Toggle
// =========================================

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeButton.textContent = "☀️ Light";

            localStorage.setItem("theme", "dark");

        } else {

            themeButton.textContent = "🌙 Dark";

            localStorage.setItem("theme", "light");

        }

    });

}


// =========================================
// Hamburger Menu
// =========================================

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {

            menuButton.textContent = "✕";

            menuButton.setAttribute(
                "aria-label",
                "Close Menu"
            );

        } else {

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open Menu"
            );

        }

    });

}


// =========================================
// Close Mobile Menu After Clicking Link
// =========================================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu && navMenu.classList.contains("active")) {

            navMenu.classList.remove("active");

            if (menuButton) {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            }

        }

    });

});


// =========================================
// Email Validation Pattern
// =========================================

const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// =========================================
// Contact Form Validation
// =========================================

if (
    form &&
    nameInput &&
    emailInput &&
    messageInput &&
    formMessage
) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = nameInput.value.trim();

        const email = emailInput.value.trim();

        const message = messageInput.value.trim();

        formMessage.textContent = "";


        // Name Validation

        if (name === "") {

            formMessage.style.color = "red";

            formMessage.textContent =
                "Please enter your name.";

            return;

        }


        // Email Validation

        if (email === "") {

            formMessage.style.color = "red";

            formMessage.textContent =
                "Please enter your email.";

            return;

        }


        if (!emailPattern.test(email)) {

            formMessage.style.color = "red";

            formMessage.textContent =
                "Please enter a valid email address.";

            return;

        }


        // Message Validation

        if (message === "") {

            formMessage.style.color = "red";

            formMessage.textContent =
                "Please enter your message.";

            return;

        }


        // Success

        formMessage.style.color = "green";

        formMessage.textContent =
            "Message sent successfully!";

        form.reset();

    });

}