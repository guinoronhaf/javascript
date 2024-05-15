// sintaxe

function primeiraFuncao() {
    
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log('Esperou isso aqui!')
            resolve()
        }, 1000)

    })

}

async function segundaFuncao() {

    console.log('Iniciou')

    await primeiraFuncao() // caso o "await" não seja utilizado, a função "segundaFuncao()" não vai esperar até que o setTimeout seja concluído, e executará o "console.log('Terminou')"

    console.log('Terminou')

}

segundaFuncao()

// prática

function getUser(id) {
    
    return fetch(`https://reqres.in/api/users?id=${id}`)
        .then(data => data.json())
        .catch(err => console.log(err))
    
}

async function showUserName(id) {

    try {
        const user = await getUser(id) // se tirar o "await", o código é executado tão rápido que não dá tempo de obter o retorno da API, o que resulta num erro.
        console.log(`O nome do usuário é: ${user.data.first_name}.`)
    } catch(err) {
        console.log(`Erro: ${err}`)
    }

}

showUserName(3)