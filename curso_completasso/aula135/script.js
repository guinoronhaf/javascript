import {Cxmsg} from "./cxmsg.js";

const config = {
    cor: "#48f",
    tipo: "sn", // tipos: ok, sn 
    textos: ["SIM", "NÃO"], 
    comandoSn: () => {null}
};

const fSim = () => {
    const imagem = document.querySelector('#logo > img');
    imagem.setAttribute('src', 'saojanu.jpg');
};

const btnMostrarCaixa1 = document.querySelector('#btn_mostrarcxmsg1');
const btnMostrarCaixa2 = document.querySelector('#btn_mostrarcxmsg2');
const btnMostrarCaixa3 = document.querySelector('#btn_mostrarcxmsg3');

btnMostrarCaixa1.addEventListener("click", () => {
    // const cxMsg = new Cxmsg({
    //     titulo: 'Js', 
    //     texto: 'curso de js', 
    //     cor: 'rgb(235, 235, 10)'
    // });
    config.tipo = 'ok';
    Cxmsg.mostrarCaixa(config, 'js', 'curso de js');
});

btnMostrarCaixa2.addEventListener("click", () => {
    // const cxMsg = new Cxmsg({
    //     titulo: 'HTML', 
    //     texto: 'curso de HTML', 
    //     cor: 'rgb(235, 111, 10)'
    // });
    config.tipo = 'sn';
    config.comandoSn = () => {fSim()};
    Cxmsg.mostrarCaixa(config, 'html', 'curso de html');
});

btnMostrarCaixa3.addEventListener("click", () => {
    // const cxMsg = new Cxmsg({
    //     titulo: 'CSS', 
    //     texto: 'curso de CSS', 
    //     cor: '#48f'
    // });
    config.tipo = 'sn';
    config.textos = ["OK", "CANCELA"];
    config.comandoSn = () => {}; // dessa forma, nada é executado.
    Cxmsg.mostrarCaixa(config, 'css', 'curso de css');
});