function carregar() {
    var parag = window.document.querySelector('#horas')
    var img = window.document.querySelector('#img')
    var data = new Date()
    var hora = data.getHours()
    parag.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12) {
        img.src = "imagens/dia.jpg"
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        img.src = "imagens/tarde.jpg"
        document.body.style.background = '#b9846f'
    } else {
        img.src = "imagens/noite.jpg"
        document.body.style.background = '#515154'
    }
}