const q1 = document.querySelector('#q1')
const q2 = document.querySelector('#q2')
const posx = document.querySelector('#posx')
const posy = document.querySelector('#posy')
const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')

let DOMRect_q1 = q1.getBoundingClientRect()

const info = (el) => {
    const DR = el.getBoundingClientRect()
    posx.innerHTML = `posx: ${DR.x}`
    posy.innerHTML = `posy: ${DR.y}`
    largura.innerHTML = `largura: ${DR.width}`
    altura.innerHTML = `altura: ${DR.height}`
}

q1.addEventListener("click", (evt) => {
    info(evt.target)
})

q2.addEventListener("click", (evt) => {
    info(evt.target)
})

// posx.innerHTML = `posx: ${DOMRect_q1.x}`
// posy.innerHTML = `posy: ${DOMRect_q1.y}`
// largura.innerHTML = `width: ${DOMRect_q1.width}`
// altura.innerHTML = `height: ${DOMRect_q1.height}`