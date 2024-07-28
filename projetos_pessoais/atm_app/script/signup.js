import { hidePassword } from "./login.js";

const eyeImg = [...document.querySelectorAll(".eyeImg")];
const btnSignup = document.querySelector("signupBtn");

eyeImg.map((eye) => {
    eye.addEventListener("click", (e) => {
        console.log(e.target.previousElementSibling);
    });
});