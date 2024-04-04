function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 28) {
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade < 10) {
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 28) {
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulta.jpg')
            } else {
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) /*isso que de fato faz a imagem aparecer*/
    }
}