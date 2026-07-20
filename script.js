const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = nameInput.value;

    const email = emailInput.value;

    const message = messageInput.value;

    if(name.trim() === ""){

        alert("Please enter your name.");

        return;

    }

    if(email.trim() === ""){

        alert("Please enter your email.");

        return;

    }

    if(message.trim() === ""){

        alert("Please enter your message.");

        return;

    }

    alert("Message sent successfully!");

});