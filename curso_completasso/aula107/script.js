const carro = document.querySelector('#carro')
const btn_esquerda = document.querySelector('#btn_esquerda')
const parar = document.querySelector('#parar')
const play = document.querySelector('#play')
const btn_direita = document.querySelector('#btn_direita')

const init = () => {
    carro.style = 'position: relative; left: 0px; width: 100px; height: 40px'
    tamCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null
let tamCarro = null
let dir = 0
let tempo = 20

const mover = () => {
    // if (dir > 0) {
    //     if (parseInt(carro.style.left) <= tamMax) {
    //         carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
    //         anima = setTimeout(mover, 20, dir) // cria-se uma recursividade com o setTimeOut, pq a cada 20ms a função mover é chamada.
    //     } else {
    //         clearTimeout(anima)
    //     }
    // } else if (dir < 0) {
    //     if (parseInt(carro.style.left) >= 0) {
    //         carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
    //         anima = setTimeout(mover, 20, dir)
    //     } else {
    //         clearTimeout(anima)
    //     }
    // }
    if (parseInt(carro.style.left) >= tamMax) {
        dir = -1
    } else if (parseInt(carro.style.left) <= 0) {
        dir = 1
    }
    carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
    anima = setTimeout(mover, tempo)
}

// btn_esquerda.addEventListener("click", () => {
//     clearTimeout(anima)
//     mover(-1)
// })

play.addEventListener("click", () => {
    mover()
})

parar.addEventListener("click", () => {
    clearTimeout(anima)
})

// btn_direita.addEventListener("click", () => {
//     clearTimeout(anima)
//     mover(1)
// })

// window.onload = init
window.addEventListener("load", init())

window.addEventListener("resize", () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener("keydown", (evt) => {
    if (evt.code == 'ArrowUp') {
        carro.style.width = parseInt(carro.style.width) + 10 + 'px'
        carro.style.height = parseInt(carro.style.height) + 10 + 'px'
    } else if (evt.code == 'ArrowDown') {
        carro.style.width = parseInt(carro.style.width) - 10 + 'px'
        carro.style.height = parseInt(carro.style.height) - 10 + 'px'
    }
     else if (evt.code == 'ArrowRight') {
        tempo--
    } else if (evt.code == 'ArrowLeft') {
        tempo++
    }
})