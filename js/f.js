document.addEventListener("DOMContentLoaded", function () {
    // Selection of UI Containers (Boxes)
    const registerBox = document.getElementById('register-box');
    const loginBox = document.getElementById('login-box');

    // Selection of Buttons
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const goToLoginLink = document.getElementById('show-login');
    const goToRegisterLink = document.getElementById('show-register');

    // Function to switch to Login View
    function showLogin() {
        registerBox.style.display = 'none';
        loginBox.style.display = 'block';
    }

    // Function to switch to Register View
    function showRegister() {
        loginBox.style.display = 'none';
        registerBox.style.display = 'block';
    }

    // Logic to handle User Registration
    registerBtn.addEventListener("click", function () {
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-pass').value;

        if (email && pass) {
            // Saving data to Browser Memory (LocalStorage)
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPass', pass);
            alert("Registration Successful! Now please Login.");
            showLogin(); 
        } else {
            alert("Error: Please fill in all details.");
        }
    });

    // Logic to handle User Login
    loginBtn.addEventListener("click", function () {
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-pass').value;

        // Retrieving saved data from LocalStorage
        const savedEmail = localStorage.getItem('userEmail');
        const savedPass = localStorage.getItem('userPass');

        // Validating credentials
        if (email === savedEmail && pass === savedPass) {
            alert("Welcome to Facebook!");
            window.location.href = "csharp.html"; // Redirecting to main page
        } else {
            alert("Error: Invalid Email or Password!");
        }
    });

    // Event Listeners for switching between Register and Login forms
    if (goToLoginLink) {
        goToLoginLink.addEventListener("click", showLogin);
    }
    if (goToRegisterLink) {
        goToRegisterLink.addEventListener("click", showRegister);
    }
});