// ===============================
// Select Elements
// ===============================

const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");

const formMessage = document.getElementById("form-message");

// ===============================
// Email Validation Pattern
// ===============================

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ===============================
// Form Submit
// ===============================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const message = messageInput.value.trim();

    // Clear previous message
    formMessage.textContent = "";

    // Name Validation
    if (name === "") {

        formMessage.style.color = "red";
        formMessage.textContent = "Please enter your name.";

        return;
    }

    // Email Validation
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

    // Message Validation
    if (message === "") {

        formMessage.style.color = "red";
        formMessage.textContent = "Please enter your message.";

        return;
    }

    // Success
    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";

    form.reset();

});