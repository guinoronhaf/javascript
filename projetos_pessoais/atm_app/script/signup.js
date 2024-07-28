import { hidePassword } from "./main.js";

const eyeImgs = [...document.querySelectorAll(".eyeImgS")];
const iName = document.querySelector("#iName");
const iDate = document.querySelector("#iDate");
const iUserS = document.querySelector("#iUserS");
const iPassS = document.querySelector("#iPassS");
const iPassCon = document.querySelector("#iPassCon");
const btnSignup = document.querySelector("#signupBtn");

hidePassword(eyeImgs);

btnSignup.addEventListener("click", () => {

    const bodyx = {
        name: iName.value, 
        email: iUserS.value, 
        password: iPassS.value, 
        date: iDate.value
    };

    fetch("http://localhost:3000/user", {
        method: "POST",
        body: JSON.stringify(bodyx), 
        headers: {"Content-Type":"application/json"}
    })
    .then(res => {
        if (res.status == 200) {
            console.log('ok');
            window.location.href = "http://127.0.0.1:5500/atm_app/template/login.html";
        } else {
            console.log('erro');
        }
    })

});