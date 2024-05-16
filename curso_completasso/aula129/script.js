const timer = document.querySelector('#timer');
const btnIniciar = document.querySelector('#btn_iniciar');
const btnParar = document.querySelector('#btn_parar');
const btnZerar = document.querySelector('#btn_zerar');
const btnParcial = document.querySelector('#btn_parcial');
const parcialContainer = document.querySelector('#parciais');

let tmpIni = null;
let intervalo = null;
let parciais = 0

const contador = () => {
    const tmpAtual = Date.now();
    let cont = tmpAtual - tmpIni;
    let seg = cont/1000;
    timer.innerHTML = converter(seg);
}

const converter = (seg) => {
    const hora = Math.floor(seg/3600);
    let resto = seg%3600;
    const minutos = Math.floor(resto/60);
    const segundos = Math.floor(resto%60);
    const form = `${hora<10?'0'+hora:hora}:${minutos<10?'0'+minutos:minutos}:${segundos<10?'0'+segundos:segundos}`;
    return form
}

btnIniciar.addEventListener("click", () => {
    tmpIni = Date.now();
    intervalo = setInterval(contador, 1000)
});

btnParar.addEventListener("click", () => {
    clearInterval(intervalo);
});

btnZerar.addEventListener("click", () => {
    clearInterval(intervalo);
    timer.innerHTML = '00:00:00';
    [...document.querySelectorAll('#parciais > div')].map((el) => {
        el.remove();
    })
});

btnParcial.addEventListener("click", () => {
    const parcial = timer.innerText;
    const div = document.createElement('div');
    div.classList.add('parcial');
    div.innerText = parcial;
    parcialContainer.appendChild(div);
});
