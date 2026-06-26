 const passwordInput = document.querySelector("#password");
const generateBtn = document.querySelector("#generateBtn");
const copyBtn = document.querySelector("#copyBtn");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

const allChars = uppercase + lowercase + numbers + symbols;

function generatePassword() {
    let password = "";

    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    passwordInput.value = password;
}

 
generateBtn.addEventListener("click", generatePassword);
 
copyBtn.addEventListener("click", () => {
    if (passwordInput.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordInput.value);
    alert("Password copied!");
});