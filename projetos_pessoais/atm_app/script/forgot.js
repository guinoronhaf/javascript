import { hidePassword } from "./main.js";

const iUser = document.querySelector("#iUserF");
const iPass = document.querySelector('#iNewPass');
const eyeImg = [...document.querySelectorAll('.eyeImg')];
const forgotBtn = document.querySelector('#fBtn');

hidePassword(eyeImg);

forgotBtn.addEventListener("click", () => {
    
    const endpoint = 'http://localhost:3000/updatepass';
    const bodyx = {
        pass: iPass.value,
        email: iUser.value
    };
    fetch(endpoint, {
        method: 'PATCH',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(bodyx)
    })
    .then(res => {
        if (res.status == 200) {
            console.log('ok');
            window.location.href = 'http://127.0.0.1:5500/atm_app/template/login.html';
        } else {
            console.log('erro')
        }
    })

});