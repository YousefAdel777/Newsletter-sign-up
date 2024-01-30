let emailInput = document.getElementById("email");
let regex = /^[a-zA-Z0-9+._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{1,}$/ig;

emailInput.addEventListener("focus", () => removeError());

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    removeError();
    if (!regex.test(emailInput.value)) {
        let p = document.createElement("p");
        p.className = "error";
        p.appendChild(document.createTextNode("Valid email required"));
        emailInput.previousElementSibling.appendChild(p);
        emailInput.classList.add("error");
    } 
    else {
        document.querySelector("span.email").innerHTML = `${emailInput.value}`;
        emailInput.value = "";
        document.querySelectorAll(".form > *:not(.success)").forEach((e) => e.classList.add("hidden"));
        let success = document.querySelector(".success");
        success.classList.remove("hidden");
        success.classList.add("flex");
    }
});

document.getElementById("dismiss").addEventListener("click", function () {
    this.parentElement.classList.add("hidden");
    document.querySelectorAll(".form > *:not(.success)").forEach((e) => e.classList.remove("hidden"));
});

function removeError() {
    let error = document.querySelector("p.error");
    if (error) {
        error.remove();
    }
    emailInput.classList.remove("error");
}