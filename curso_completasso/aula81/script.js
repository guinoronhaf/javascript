const olhos = document.querySelector('.olho')

let posxMouse = 0
let posyMouse = 0

window.addEventListener("mousemove", (evt) => {
    posxMouse = evt.clientX
    posyMouse = evt.clientY

    const rot = Math.atan2(posyMouse, posxMouse) * 180/Math.PI

    olhos.style.transform = 'rotate('+rot+'deg)'
})
