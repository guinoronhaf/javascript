const output = document.querySelector('#output');
const range = document.querySelector('#i_range');
const spanRange = document.querySelector('#range');
const num = document.querySelector('#num');
const simb = document.querySelector('#simb');
const maiu = document.querySelector('#maiu');
const minu = document.querySelector('#minu');
const gerar = document.querySelector('#gerar');
const copiar = document.querySelector('#copiar');
const copiado = document.querySelector('#copiado');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['!', '@', '#', '$', '%', '&', '*', '_', '^', '~'];

const characters = Array.from(Array(26)).map((_, i) => i + 97);
const lowercaseCharac = characters.map((item) => String.fromCharCode(item));
const uppercaseCharac = lowercaseCharac.map((item) => item.toUpperCase());

spanRange.innerHTML = range.value;

range.addEventListener("input", (e) => {
    spanRange.innerHTML = e.target.value;
})

gerar.addEventListener("click", () => {
    output.value = generatePassword();
})

copiar.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);
})

const generateArray = (
    hasNumbers, 
    hasSymbols, 
    hasLowercase, 
    hasUppercase
) => {
    const newArray = [
        ...(hasNumbers?numbers:[]), 
        ...(hasSymbols?symbols:[]), 
        ...(hasLowercase?lowercaseCharac:[]), 
        ...(hasUppercase?uppercaseCharac:[])
    ];

    return newArray;
};

const generateValidation = (
    numbersIncluded, 
    symbolsIncluded,
    lowercaseIncluded, 
    uppercaseIncluded, 
    length 
) => {
    let regexPrototype = '';

    if (numbersIncluded) {
        regexPrototype += '(?=.*\\d)';
    }
    if (symbolsIncluded) {
        regexPrototype += '(?=.*[}{#@!%&,.^?~=+\\-_\\/*\\-+.\\|])';
    }
    if (lowercaseIncluded) {
        regexPrototype += '(?=.*[a-z])';
    }
    if (uppercaseIncluded) {
        regexPrototype += '(?=.*[A-Z])';
    }

    regexPrototype += `.{${length},}`;

    let finalRegex = new RegExp(regexPrototype);

    return finalRegex;
};

const generatePassword = () => {
    const elementsRequired = generateArray(
        num.checked,
        simb.checked, 
        minu.checked, 
        maiu.checked
    );

    const validation = generateValidation(
        num.checked,
        simb.checked, 
        minu.checked, 
        maiu.checked, 
        range.value
    );

    const length = range.value;

    while (!validation.test(password) || !password) {
        var password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * elementsRequired.length);
            password += elementsRequired[randomIndex];
        }
    }

    return password;
};
