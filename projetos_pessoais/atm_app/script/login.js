const iUser = document.querySelector('#iUser');
const iPass = document.querySelector('#iPass');
const eyeImg = document.querySelector('#eyeImg');
const btnLogin = document.querySelector('#loginBtn');

const hidePassword = (e) => {

    const password = e.target.previousElementSibling;

    const newType = password.getAttribute("type")=="password"?"text":"password";

    const newSrc = e.target.getAttribute("src")=="../images/view.svg"?"../images/notview.svg":"../images/view.svg";

    password.setAttribute("type", newType);

    e.target.setAttribute("src", newSrc);

};

eyeImg.addEventListener("click", (e) => {
    hidePassword(e);
});

// btnLogin.addEventListener("click", () => {
//     const bodyx = {
//         email: iUser.value,
//         password: iPass.value
//     };
//     fetch("http://localhost:3000/user", {
//         method: "POST",
//         body: JSON.stringify(bodyx), 
//         headers: {"Content-Type":"application/json"}
//     })
//     .then(res => {
//         if (res.status == 200) {
//             console.log('ok');
//             console.log(bodyx);
//         } else {
//             console.log('erro');
//         }
//     })
// });

export { hidePassword };