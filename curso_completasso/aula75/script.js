const numero = document.querySelector('#numero')

let promise = new Promise((resolve, reject) => { // 1o parâmetro == deu certo/ 2o parâmetro == deu errado
    let resultado = false
    let tempo = 3000
    setTimeout(() => {
        if (resultado) {
            resolve = 'deu tudo certo'
        } else {
            reject = 'deu tudo errado'
        }
    }, tempo)
})

promise.then((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
}) //deu certo
promise.catch((retorno) => {
    numero.innerHTML = retorno
    numero.classList.add('erro')
    numero.classList.remove('ok')
}) //deu errado

numero.innerHTML = 'Processando...'