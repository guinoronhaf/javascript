const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('#display')
const ton = document.querySelector('#ton')
const tlimpar = document.querySelector('#tlimpar')
const tcpy = document.querySelector('#tcpy')
const teste = document.querySelector('#teste')
const calc_aba = document.querySelector('#calc_aba')
const calc = document.querySelector('#calc')
const img_aba_calc = document.querySelector('#img_aba_calc')

let sinal = false
let decimal = false

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false
        if (evt.target.innerHTML == ',') {
            if (!decimal) {
                decimal = true
                if (display.innerHTML == '0') {
                    display.innerHTML = '0,'
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            if (display.innerHTML == '0') {
                display.innerHTML = ''
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (!sinal) {
            sinal = true
            if (display.innerHTML == '0') {
                display.innerHTML = ''
            }
            if (evt.target.innerHTML == 'x') {
                display.innerHTML += '*'
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener("click", () => {
    display.innerHTML = '0'
    sinal = false
    decimal = false
})

teclaRes.addEventListener("click", () => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML) // eval pega a expressão e resolve ela.
    display.innerHTML = res
})

tcpy.addEventListener("click", () => {
    navigator.clipboard.writeText(display.innerHTML) // permite que o usuário copie o que está no display
    // teste.select() // quando clicar no cpy, seleciona o que tiver no input
    // teste.setSelectionRange(0, 999999) // mobile
    // navigator.clipboard.writeText(teste.value)
})

calc_aba.addEventListener("click", () => {
    calc.classList.toggle('calc_exibir')
    if (calc.classList.contains('calc_exibir')) {
        img_aba_calc.setAttribute('src', 'setaesquerda.svg')
    } else {
        img_aba_calc.setAttribute('src', 'setadireita.svg')
    }
})