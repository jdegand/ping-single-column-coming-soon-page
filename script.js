let email = document.getElementById("email");
let errorMessage = document.getElementById("error-message");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    if (email.validity.typeMismatch) {
        e.preventDefault();
        errorMessage.style.display = 'block';
        email.style.border = '1px solid hsl(354, 100%, 66%)';
    } else {
        errorMessage.style.display = 'none';
    }
})
