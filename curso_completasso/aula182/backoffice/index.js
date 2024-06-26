const menuPrincipal = document.querySelector('#menuPrincipal');
const btnMenuPrincipal = document.querySelector('#btn_menuPrincipal');
const todosMenuPrincipal = [...document.querySelectorAll('.btn_menuItem')];

btnMenuPrincipal.addEventListener("click", () => {
    menuPrincipal.classList.toggle('ocultar');
});

todosMenuPrincipal.map((menu) => {
    menu.addEventListener("click", () => {
        menuPrincipal.classList.add('ocultar');
    }); 
})
