const val1 = document.querySelector('#val1')
const val2 = document.querySelector('#val2')
const res = document.querySelector('#res')
const limpa = document.querySelector('#limpa')
let btn = [...document.getElementsByTagName('button')]

op = [
    (a, b) => {return Number(a) + Number(b)}, 
    (a, b) => {return Number(a) - Number(b)}, 
    (a, b) => {return Number(a) * Number(b)}, 
    (a, b) => {return Number(a)/Number(b)}
]

btn.map((el, pos) => {
    el.addEventListener("click", () => {
        if (val1.value && val2.value) {
            const resultado = op[pos](val1.value, val2.value)
            res.textContent = resultado
        } else {
            alert('Por favor, digite dois valores nos campos indicados.')
        }
    })
})

limpa.addEventListener("click", () => {
    val1.value = ''
    val2.value = ''
    res.textContent = '0'
})
