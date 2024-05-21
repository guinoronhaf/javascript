const output = document.querySelector('#output');
const iRange = document.querySelector('#i_range');
const range = document.querySelector('#range');
const num = document.querySelector('#range');
const simb = document.querySelector('#simb');
const maiu = document.querySelector('#maiu');
const minu = document.querySelector('#minu');
const gerar = document.querySelector('#gerar');

range.innerHTML = iRange.value;

iRange.addEventListener("input", (evt) => {
    range.innerHTML = evt.target.value;
});

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const simbolos = ['!', '@', '#', '$', '%', '&', '*', '_'];

const caracteres = Array.from(Array(26)).map((_, i) => i + 97);
const lowerCaseCaracteres = caracteres.map((item) => String.fromCharCode(item));
const upperCaseCaracteres = lowerCaseCaracteres.map((item) => item.toUpperCase());

gerar.addEventListener("click", () => {
    generatePassword(
        num.checked,
        simb.checked, 
        maiu.checked, 
        minu.checked,
        iRange.value
    );
});

const generatePassword = (
    hasNumbers, 
    hasSymbols,
    hasMaiusculas, 
    hasMinusculas,
    lenght
) => {
    const newArray = [
        ...(hasNumbers?numbers:[]), 
        ...(hasSymbols?simbolos:[]), 
        ...(hasMaiusculas?upperCaseCaracteres:[]), 
        ...(hasMinusculas?lowerCaseCaracteres:[]), 
    ];

    let password = '';

    for (let i = 1; i <= lenght; i++) {
        const randomCharacter = Math.floor(Math.random() * newArray.length);
        password += newArray[randomCharacter];
    }

    output.value = password;
};