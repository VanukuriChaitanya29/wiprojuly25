function login() {
    let userId = document.getElementById("userId").value;
    let password = document.getElementById("password").value;

    if (userId && password) {
        localStorage.setItem("userId", userId);
        console.log("Login successful! Stored userId:", userId);
    } else {
        console.log("Please enter both User ID and Password");
    }
}

function logout() {
    localStorage.removeItem("userId");
    console.log("Logged out! userId removed from localStorage.");
}
