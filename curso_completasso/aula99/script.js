class Jogador {
    constructor(nome) {
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = [new Jogador('j1'), new Jogador('j2'), new Jogador('j3'), new Jogador('j4'), new Jogador('j1'), new Jogador('j3')]

// let s1 = jogadores[0].id gerou um identificador único



let s = []

let todosS = []

let s_jogadores = jogadores.filter((j) => {
    return j.nome != 'j1'
})

s_jogadores.map((el) => {
    todosS.push(el.id)
})

s = s_jogadores.map((j) => {
    return j.id
})

console.log(s)
console.log(s_jogadores)
console.log(todosS)
