const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#number");
const passwordInput = document.querySelector("#password");
const nameError = document.createElement("div");
nameError.style.color = "red";
nameError.style.fontSize = "11px";
nameInput.parentNode.appendChild(nameError);

const emailError = document.createElement("div");
emailError.style.color = "red";
emailError.style.fontSize = "11px";
emailInput.parentNode.appendChild(emailError);

const numberError = document.createElement("div");
numberError.style.color = "red";
numberError.style.fontSize = "11px";
numberInput.parentNode.appendChild(numberError);

const passwordError = document.createElement("div");
passwordError.style.color = "red";
passwordError.style.fontSize = "10px";
passwordInput.parentNode.appendChild(passwordError);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!nameInput.value){
        nameError.textContent = "Please enter your name"
    } else{
        nameError.textContent = ""
    }
    if (!emailInput.value) {
      emailError.textContent = "Please enter an email";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email";
    } else {
      emailError.textContent = "";
    }
    if (!numberInput.value) {
        numberError.textContent = " Please enter your phone number";
    } else if(numberInput.value.length !== 10 || isNaN(numberInput.value) || !/^\d+$/.test(numberInput.value)) {
        numberError.textContent = "Please enter a valid phone number";
    } else {
        numberError.textContent = "";
    }
    
    if (!passwordInput.value) {
      passwordError.textContent = "Please create a password";
    } else if (
      passwordInput.value.length < 8 ||
      !/[a-z]/.test(passwordInput.value) ||
      !/[A-Z]/.test(passwordInput.value) ||
      !/\d/.test(passwordInput.value) ||
      !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordInput.value) ||
      /\s/.test(passwordInput.value)
    ) {
      passwordError.textContent = "password doesn't have the correct format ";
    } else {
      passwordError.textContent = "";
    }
  });




