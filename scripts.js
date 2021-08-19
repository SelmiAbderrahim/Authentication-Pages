/*
    SignUP
*/ 
const close = document.querySelector(".message-close");
const message = document.querySelector(".messages");

if (close && message){
    //Close Error/Success Message
    close.addEventListener("click", () =>{
        message.style.display = "none";
    })
     
}

//Form Validation
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) =>{
    
    const title = document.querySelector(".message-title");
    const messageParagraph = document.querySelector(".message-paragraph");
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    if (password1 != password2){
        e.preventDefault(); 
        message.style.display = "flex";
        title.textContent = "Invalid Password!";
        messageParagraph.textContent = "Make sure to confirm your password."
    }

})
