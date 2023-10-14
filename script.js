const inputBtn = document.getElementById("input-btn");
const startPage = document.getElementById("get-started")
const signInPage = document.getElementById("signin-page")
const alert = document.getElementById("alert")
const validEmail = "host@dev.com"

inputBtn.addEventListener("click", function(){
    const email = document.getElementById("email").value;

    if(email === validEmail){
        startPage.style.display = "none";
        signInPage.style.display = "block";
    } else{
        alert.textContent = "Not a valid Email"
    }
})