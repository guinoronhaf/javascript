function contar() {
    var inicio = document.querySelector('#iini')
    var fim = document.querySelector('#ifim')
    var passo = document.querySelector('#ipas')
    var res = document.querySelector('#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Sem valores em branco, por favor.')
        res.innerHTML = 'Impossível contar.'
    } else {
        res.innerHTML = 'Contando... <br>' //tag br colocada.
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Passo passrá a valer 1.')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} --> `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} --> `
            }
        }
        res.innerHTML += '.'
    }
}