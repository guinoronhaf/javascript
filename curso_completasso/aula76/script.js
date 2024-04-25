const numero = document.querySelector('#numero')
const btn_promessa = document.querySelector('#btn_promessa')

btn_promessa.addEventListener("click", () => {
    numero.innerHTML = 'Processando...'
    promessa()
        .then((retorno) => { // aqui não precisa colocar "p.then" nem "p.catch"
            numero.innerHTML = retorno
            numero.classList.remove('erro')
            numero.classList.add('ok')
        }) //deu certo
        .catch((retorno) => {
            numero.innerHTML = retorno
            numero.classList.add('erro')
            numero.classList.remove('ok')
        }) //deu errado
})

const promessa = () => {
    let p = new Promise((resolve, reject) => { // 1o parâmetro == deu certo/ 2o parâmetro == deu errado
        let resultado = false
        let tempo = 3000
        setTimeout(() => {
            if (resultado) {
                resolve('deu tudo certo')
            } else {
                reject('deu tudo errado')
            }
        }, tempo)
    })
    return p
}

numero.innerHTML = 'Esperando...'