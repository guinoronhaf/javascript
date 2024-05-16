const texto = document.querySelector('#texto');

const endpoint = "texto.txt";

fetch(endpoint)
.then(res => res.json()) // ou deixa só o texto e coloca "res.text("
.then((data) => {
    console.log(data);
    console.log(data.clube);
    console.log(data.curso);
})
