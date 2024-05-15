const f_texto = document.querySelector('#f_texto')
const p_texto = document.querySelector('#p_texto')
const btn_texto = document.querySelector('#btn_texto')

btn_texto.addEventListener("click", (evt) => {

})

let num = 10
// window.localStorage.setItem('numero', num)
localStorage.setItem('numero', num)
localStorage.setItem('clube', 'Vasco')
localStorage.setItem('dia', 'ensolarado')
alert(localStorage.key(0))