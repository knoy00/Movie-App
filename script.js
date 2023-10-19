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
const home = document.getElementById("home")
const image = document.getElementById("image")
const movieInfo = document.getElementById("movie-info")
const menuBar = document.getElementById("menu-bar")
const container = document.getElementById("container")
const net = document.getElementById("net")
const header = document.querySelector("header")
const navBar = document.querySelector("homePage")
const signUpBtn = document.getElementById("signup-btn")
const homePage = document.getElementById("homePage")
const secondPage = document.getElementById("second-page")
const thirdPage = document.getElementById("third-page")
const fourthPage = document.getElementById("fourth-page")

// const navBarOffset = navBar.offsetTop;



const validEmail = "host@dev.com"

inputBtn.addEventListener("click", function(){
    const email = document.getElementById("email").value;

    if(email === validEmail){
        startPage.style.display = "none";
        signUpPage.style.display = "block";
    } else if (email.length <= 0) {
        alert.textContent = "Enter your Email address"
    } else{
        alert.textContent = "Not a valid Email address"
    }
})

let isSignInState = true;

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


signUpBtn.addEventListener("click", () => {
    startPage.style.display = "none";
   signUpPage.style.display = "none";
    homePage.style.display = "block"
    secondPage.style.display = "block"
    thirdPage.style.display = "block"
    fourthPage.style.display = "block"
 })