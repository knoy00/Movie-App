const inputBtn = document.getElementById("input-btn");
const startPage = document.getElementById("get-started")
const signUpPage = document.getElementById("signup-page")
const alert = document.getElementById("alert")
const confirmPassword = document.getElementById("confirm-password")
const signUp = document.getElementById("signup-btn")
const signIn = document.getElementById("signin-btn")
const nameField = document.getElementById("nameField")
const forgotPassword = document.getElementById("forgotPassword")
const title = document.getElementById("title")
const noAccount = document.getElementById("account")
const userName = document.getElementById("username")
let isSignInState = true;
const validEmail = "host@dev.com"

inputBtn.addEventListener("click", function(){
    const email = document.getElementById("email").value;

    if(email === validEmail){
        startPage.style.display = "none";
        signUpPage.style.display = "block";
    } else{
        alert.textContent = "Not a valid Email"
    }
})

signIn.onclick = function() {
    if(isSignInState){
        nameField.style.maxHeight = "0";
        forgotPassword.textContent = "Forgot Password?"
        title.textContent = "Sign In"
        signUp.textContent = "Sign In"
        noAccount.textContent = "Don't have an account?"
        signIn.textContent = "Sign up"
        userName.placeholder = "Email  or Username"
        nameField.placeholder = ""
    } else {
        nameField.style.maxHeight = "250px";
        title.textContent = "Sign Up"
        signUp.textContent = "Sign Up"
        userName.placeholder = "Email"
        forgotPassword.textContent = ""
        noAccount.textContent = "Have an account?"
        signIn.textContent = "Sign in"
        nameField.placeholder = "Confirm Password"
    }

    isSignInState = !isSignInState
}
