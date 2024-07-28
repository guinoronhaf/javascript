const hidePassword = (list) => {

    list.map(el => {
        el.addEventListener("click", () => {
            const inpPass = el.previousElementSibling;
            const newType = inpPass.getAttribute("type")=="password"?"text":"password";
            const newSrc = el.getAttribute("src")=="../images/view.svg"?"../images/notview.svg":"../images/view.svg";
            inpPass.setAttribute("type", newType);
            el.setAttribute("src", newSrc);
        });
    });

};

export { hidePassword };