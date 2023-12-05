function login() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    // Perform login validation (client-side)
    if (email && password) {
        alert("Login successful!");
    } else {
        alert("Please enter valid credentials.");
    }
}

function signup() {
    var name = document.getElementById("signup-name").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    // Perform signup validation (client-side)
    if (name && email && password) {
        alert("Signup successful!");
    } else {
        alert("Please fill in all fields.");
    }
}
