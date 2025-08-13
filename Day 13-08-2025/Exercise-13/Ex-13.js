function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePassword() {
    let password = document.getElementById("password").value.trim();
    let passwordError = document.getElementById("passwordError");

    if (password === "") {
        passwordError.textContent = "Password is required.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

// Attach onblur validation
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("password").addEventListener("blur", validatePassword);

// On Login button click
document.getElementById("loginBtn").addEventListener("click", function() {
    let isEmailValid = validateEmail();
    let isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        alert("Login successful!");
    }
});
