//Criação de promises
const myPromise = new Promise((resolve, reject) => {
    
    const nome = 'Guilherme'

    if (nome === 'Guilherme') {
        resolve(`Usuário ${nome} encontrado!`)
    } else {
        reject(`Usuário ${nome} não encontrado.`)
    }
})

myPromise.then((data) => { // "data" aqui é justamente a reposta do resolve/reject
    console.log(data)
})

//Encademantos de ".then()'s"
const myPromise2 = new Promise((resolve, reject) => {
    
    const nome = 'Guilherme'

    if (nome === 'Guilherme') {
        resolve(`Usuário ${nome} encontrado!`)
    } else {
        reject(`Usuário ${nome} não encontrado.`)
    }
})

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

//Utilização do método .catch()
const myPromise3 = new Promise((resolve, reject) => {
    
    const nome = 'Guilherm'

    if (nome === 'Guilherme') {
        resolve(`Usuário ${nome} encontrado!`)
    } else {
        reject(`Usuário ${nome} não encontrado.`)
    }
})

myPromise3
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(`Aconteceu um erro: ${err}`)
})

//Resolver várias promessas
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok! Timeout')
    }, 2000); // todas as promises vão ter que esperar os 2 segundos para darem algum retorno.
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data) // resolveu todas as promises
})

console.log('Antes de tudo') // prova de que as promises são "assíncronas": este comando é imediato, já que não depende de nenhuma verificação externa, sendo printado antes de todas as promises.

//Várias promessas com race()
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1=4 ok! Timeout')
    }, 2000);
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => { // o método "race()" retorna a promise que foi concluída primeiro dentre as 3. Neste caso, como p4 tem o setTimeout, p5 é a primeira depois dela.
    console.log(data)
})

// Fetch request na API do GitHub
//Fetch API

const userName = 'guinoronhaf'

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET', 
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
})

.then((response) => { //primeiro then pega os dados "crus"
    return response.json()
}).then((data) => { //esse then trata mais os dados, entregando na forma de objeto literal.
    console.log(`O nome do usuário é ${data.name}.`)
}).catch((err) => {
    console.log(`Houve algum erro: ${err}`)
})
