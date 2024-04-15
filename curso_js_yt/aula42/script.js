//ADICIONANDO/ALTERANDO ATRIBUTOS DE ELEMENTOS ATRAVÉS DO DOM
var title = document.querySelector('#title')
title.setAttribute('class', 'testando-atributo') //adiciona um atributo do tipo "class" chamado "testando-atributo"

var btn = document.querySelector('#btn')
btn.setAttribute('disabled', 'disabled') //desabilita o botão

//removendo atributos


title.removeAttribute('class') //remove a classe que foi colocada no title