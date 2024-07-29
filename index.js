const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorMessage = document.createElement("div");
errorMessage.style.color = "red";
errorMessage.style.fontSize = "13px";
errorMessage.style.padding = "15px";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailInput.value) {
    errorMessage.textContent = "Please enter an email";
    form.appendChild(errorMessage);
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
    errorMessage.textContent = "Please enter a valid email";
    form.appendChild(errorMessage);
  } else if (!passwordInput.value) {
    errorMessage.textContent = "Please enter a password";
    form.appendChild(errorMessage);
  } else if (
    passwordInput.value.length < 8 ||
    !/[a-z]/.test(passwordInput.value) ||
    !/[A-Z]/.test(passwordInput.value) ||
    !/\d/.test(passwordInput.value) ||
    !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordInput.value) ||
    /\s/.test(passwordInput.value)
  ) {
    errorMessage.textContent ="Incorrect password";
    form.appendChild(errorMessage);
  } else {
    errorMessage.remove();
  }
});
