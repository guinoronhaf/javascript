const cabecalho = document.querySelector('#cabecalho');
const menu = document.querySelector('#menu');
const btnHome = document.querySelector('#btn_home');
const btnNovo = document.querySelector('#btn_novo');
const btnPesquisar = document.querySelector('#btn_pesquisar');
const btnFiltrar = document.querySelector('#btn_filtrar');
const btnGestao = document.querySelector('#btn_gestao');
const btnSobre = document.querySelector('#btn_sobre');
const principal = document.querySelector('#principal');

btnHome.addEventListener("click", (e) => {
    abrirPagina(e.target, 'home.html');
});

btnNovo.addEventListener("click", (e) => {
    abrirPagina(e.target, 'novo.html');
});

btnPesquisar.addEventListener("click", (e) => {
    abrirPagina(e.target, 'pesquisar.html');
});

btnFiltrar.addEventListener("click", (e) => {
    abrirPagina(e.target, 'filtrar.html')
});

btnGestao.addEventListener("click", (e) => {
    abrirPagina(e.target, 'gestao.html');
});

btnSobre.addEventListener("click", (e) => {
    abrirPagina(e.target, 'sobre.html');
});

const abrirPagina = (select, url) => {
    [...document.querySelectorAll('.aba')].map((aba) => {
        aba.classList.remove('abaSelecionada');
    });
    select.classList.add('abaSelecionada');
    window.open(url, 'if_principal');
};

// console.log('Gestão'.replace('ã', 'a').toLowerCase());