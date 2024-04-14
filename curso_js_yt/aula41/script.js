//criando um elemento
var el = document.createElement('h3');

el.classList = 'testando-classe';

var texto = document.createTextNode('Este é o texto');

el.appendChild(texto);

//selecionar o elemento que eu quero trocar

var title = document.querySelector('#title');

//selecionar o pai desse elemento

var pai = title.parentNode;

//trocando os elementos

pai.replaceChild(el, title)
