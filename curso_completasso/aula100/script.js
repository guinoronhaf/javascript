const nome = Symbol('nome')
const numero = Symbol('nome')
const corUniforme = Symbol('nome')

const Jogador = {
    [nome]: 'j1',
}

Jogador[numero] =  '10', 
Jogador[corUniforme] = 'amarelo'

for (p in Jogador) {
    console.log(p)
}

console.log(Jogador[nome])
console.log(Jogador[numero])
console.log(Jogador[corUniforme])