import { hidePassword } from "./main.js";

const iUser = document.querySelector('#iUser');
const iPass = document.querySelector('#iPass');
const eyeImg = [...document.querySelectorAll('.eyeImg')];
const btnLogin = document.querySelector('#loginBtn');

hidePassword(eyeImg);

btnLogin.addEventListener("click", () => {

    const endpoint = `http://localhost:3000/checkuser/${iUser.value}`;

    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        let loginFlag = false;
        if (data[0].senha == iPass.value) {
            loginFlag = true;
        } else if (!data[0] || data[0].senha != iPass.value) {
            loginFlag = false;
        }

        if (loginFlag) {
            window.location.href = 'http://127.0.0.1:5500/atm_app/template/ok.html'
        } else {
            window.location.href = 'http://127.0.0.1:5500/atm_app/template/nao.html'
        }
    })

});
