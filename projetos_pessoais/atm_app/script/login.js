const iUser = document.querySelector('#iUser');
const iPass = document.querySelector('#iPass');
const eyeImg = document.querySelector('#eyeImg');
const btnLogin = document.querySelector('#loginBtn');

eyeImg.addEventListener("click", () => {
    const newType = iPass.getAttribute("type")=="password"?"text":"password";
    iPass.setAttribute("type", newType);

    const newSrc = eyeImg.getAttribute("src")=="../images/view.svg"?"../images/notview.svg":"../images/view.svg";
    eyeImg.setAttribute("src", newSrc);
});

btnLogin.addEventListener("click", () => {
    const bodyx = {
        email: iUser.value,
        password: iPass.value
    };
    fetch("http://localhost:3000/user", {
        method: "POST",
        body: JSON.stringify(bodyx), 
        headers: {"Content-Type":"application/json"}
    })
    .then(res => {
        if (res.status == 200) {
            console.log('ok');
            console.log(bodyx);
        } else {
            console.log('erro');
        }
    })
});