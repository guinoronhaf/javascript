const output = document.querySelector('#output');
const iRange = document.querySelector('#i_range');
const range = document.querySelector('#range');
const num = document.querySelector('#num');
const simb = document.querySelector('#simb');
const maiu = document.querySelector('#maiu');
const minu = document.querySelector('#minu');
const gerar = document.querySelector('#gerar');
const copiar = document.querySelector('#copiar');
const copiado = document.querySelector('#copiado');

range.innerHTML = iRange.value;

iRange.addEventListener("input", (evt) => {
    range.innerHTML = evt.target.value;
});

const createArrays = () => {
    let array = [];

    if (num.checked) {
        array.push('0123456789');
    }
    if (simb.checked) {
        array.push('!@#4%&*_');
    }
    if (maiu.checked) {
        array.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (minu.checked) {
        array.push('abcdefghijklmnopqrstuvwxyz');
    }

    return array
};

const generatePassword = () => {
    let password = '';
    const arr = createArrays();
    for (let i = 0; i <= iRange.value; i++) {
        let firstPosition = arr[Math.floor(Math.random() * arr.length)];
        let randomC = firstPosition[Math.floor(Math.random() * firstPosition.length)];
        password += randomC;
    }
    return password;
}

gerar.addEventListener("click", () => {
    createArrays();
    output.value = generatePassword();
});

copiar.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);
    copiado.classList.toggle('hide');
    copiado.classList.add('animation');
})
