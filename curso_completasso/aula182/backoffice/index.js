const menuPrincipal = document.querySelector('#menuPrincipal');
const btnMenuPrincipal = document.querySelector('#btn_menuPrincipal');
const todosMenuPrincipal = [...document.querySelectorAll('.btn_menuItem')];

const endpointConfig = `../config.txt`; // é possível utilizar o fetch para arquivos também
fetch(endpointConfig)
.then(res => res.json())
.then(data => {
    sessionStorage.setItem("servidorNodeRed", data.servidorNodeRed);
    sessionStorage.setItem("versao", data.versao);
})

btnMenuPrincipal.addEventListener("click", () => {
    menuPrincipal.classList.toggle('ocultar');
});

todosMenuPrincipal.map((menu) => {
    menu.addEventListener("click", () => {
        menuPrincipal.classList.add('ocultar');
    }); 
});
