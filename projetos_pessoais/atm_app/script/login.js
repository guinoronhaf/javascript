const iUser = document.querySelector('#iUser');
const iPass = document.querySelector('#iPass');
const eyeImg = document.querySelector('#eyeImg');
const btnLogin = document.querySelector('#loginBtn');

eyeImg.addEventListener("click", (e) => {

    const passInput = e.target.previousSibling.previousSibling;
    
    const newType = passInput.getAttribute("src")=="password"?"text":"password";
    const newSrc = e.target.getAttribute("src")=="../images/view.svg"?"../images/notview.svg":"../images/view.svg";

    e.target.setAttribute("src", newSrc);
    passInput.setAttribute("src", newType);
    
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
