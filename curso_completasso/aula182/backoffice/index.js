const menuPrincipal = document.querySelector('#menuPrincipal');
const btnMenuPrincipal = document.querySelector('#btn_menuPrincipal');

btnMenuPrincipal.addEventListener("click", () => {
    menuPrincipal.classList.toggle('ocultar');
});