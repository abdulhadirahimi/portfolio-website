
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

    document.body.classList.remove("dark");

    if (themeButton) {
        themeButton.textContent = "🌙 Dark";
    }

}


// =========================================
// Dark Mode Toggle
// =========================================

if (themeButton) {

    themeButton.addEventListener("click", function () {

        const darkModeEnabled =
            document.body.classList.toggle("dark");

        if (darkModeEnabled) {

            localStorage.setItem("theme", "dark");

            themeButton.textContent = "☀️ Light";

        } else {

            localStorage.setItem("theme", "light");

            themeButton.textContent = "🌙 Dark";

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

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

        } else {

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open Menu"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


// =========================================
// Close Mobile Menu After Clicking Link
// =========================================

const navLinks =
    document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (
            navMenu &&
            navMenu.classList.contains("active")
        ) {

            navMenu.classList.remove("active");

            if (menuButton) {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
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
// Contact Form Submission
// =========================================

if (
    form &&
    nameInput &&
    emailInput &&
    messageInput &&
    formMessage
) {

    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const name =
                nameInput.value.trim();

            const email =
                emailInput.value.trim();

            const message =
                messageInput.value.trim();

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


            // Disable button while sending

            const submitButton =
                form.querySelector(
                    'button[type="submit"]'
                );

            if (submitButton) {

                submitButton.disabled = true;

                submitButton.textContent =
                    "Sending...";

            }


            // Send Form to Formspree

            try {

                const response = await fetch(
                    form.action,
                    {
                        method: "POST",

                        body: new FormData(form),

                        headers: {
                            "Accept": "application/json"
                        }
                    }
                );


                if (response.ok) {

                    formMessage.style.color =
                        "green";

                    formMessage.textContent =
                        "Message sent successfully!";

                    form.reset();

                } else {

                    formMessage.style.color =
                        "red";

                    formMessage.textContent =
                        "Something went wrong. Please try again.";

                }

            } catch (error) {

                formMessage.style.color =
                    "red";

                formMessage.textContent =
                    "Unable to send message. Please try again.";

            }


            // Enable button again

            if (submitButton) {

                submitButton.disabled = false;

                submitButton.textContent =
                    "Send Message";

            }

        }
    );

}
