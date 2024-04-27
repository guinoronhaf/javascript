const palco = document.querySelector('#palco')
const numObjetos = document.querySelector('#num_objetos')
const txtQtde = document.querySelector('#txt_qtde')
const btnAdd = document.querySelector('#btn_add')
const btnRemover = document.querySelector('#btn_remover')

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0