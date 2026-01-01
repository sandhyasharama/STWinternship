// Elements ko ID ke zariye pakadna

const emailInput = document.getElementById('emailname').getElementsByTagName('input')[0];
const passwordInput = document.getElementById('passwordname').getElementsByTagName('input')[0];
const loginButton = document.getElementById('login').getElementsByTagName('button')[0];
const createAccountButton = document.getElementById('createaccount').getElementsByTagName('button')[0];
const messageDisplay = document.getElementById('message');
// Login button click function
loginButton.addEventListener('click', function() {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if(emailValue===""){
        messageDisplay.textContent="please enter your email or phone number";
        messageDisplay.style.color="red";
    }
    else if(passwordValue===""){
        messageDisplay.textContent="please enter your password";
        messageDisplay.style.color="red";
    }
    else{
        messageDisplay.textContent="logged in successfully";
        messageDisplay.style.color="green";
    }
});
// Create Account button click function
createAccountButton.addEventListener('click', function() {
    alert("Naya account banane ka form yahan dikhayen.");
});