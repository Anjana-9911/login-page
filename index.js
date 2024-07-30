const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const emailError = document.createElement("div");
emailError.style.color = "red";
emailError.style.fontSize = "11px";
// emailError.style.padding = "15px";
emailInput.parentNode.appendChild(emailError);

const passwordError = document.createElement("div");
passwordError.style.color = "red";
passwordError.style.fontSize = "11px";
// passwordError.style.padding = "15px";
passwordInput.parentNode.appendChild(passwordError);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailInput.value) {
    emailError.textContent = "Please enter an email";
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email";
  } else {
    emailError.textContent = "";
  }
  
  if (!passwordInput.value) {
    passwordError.textContent = "Please enter a password";
  } else if (
    passwordInput.value.length < 8 ||
    !/[a-z]/.test(passwordInput.value) ||
    !/[A-Z]/.test(passwordInput.value) ||
    !/\d/.test(passwordInput.value) ||
    !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordInput.value) ||
    /\s/.test(passwordInput.value)
  ) {
    passwordError.textContent = "Incorrect password";
  } else {
    passwordError.textContent = "";
  }
});
