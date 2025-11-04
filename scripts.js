/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    const msg = document.querySelector(".message");
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email.length === 0) {
            msg.innerHTML = `<p>Please enter a valid email address.</p>`;
        } else {
            msg.innerHTML = `<p>Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!</p>`;
            emailInput.value = "";
        }
    });
});