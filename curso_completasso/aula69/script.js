// ABSTRACT

class CarroPadrao {
    constructor() {
        if (this.constructor === CarroPadrao) {
            throw new TypeError('Esta classe não pode ser instanciada.') // evitar que a classe seja instanciada
        }
        if (this.ligar === undefined) {
            throw new TypeError('É obrigatório implementar o método ligar.') // garantir que o método ligar seja instanciado em todas as classes-filhas.
        }
        if (this.desligar === undefined) {
            throw new TypeError('É obrigatório implementar o método ligar.') // garantir que o método ligar seja instanciado em todas as classes-filhas.
        }
        this.portas = 4
        this.rodas = 4
        this.ligado = false
    }
}

class Carro extends CarroPadrao { // sendo assim, automaticamente, a classe "CarroEspecial" também tem como base a classe "CarroPadrao"
    constructor(tipo, estagioTurbo) {
        super()
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 120
            this.nome = 'Normal'
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = 'Esportivo'
        } else if (tipo == 3) {
            this.velMax = 200
            this.nome = 'Superesportivo'
        }
        this.velMax += this.turbo.pot
    }
    info() {
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.portas)
        console.log(this.rodas)
        console.log(this.ligado?'Sim':'Não')
        console.log('-=-=-=-=-=-=-=-=-')
    }
    ligar() {
        this.ligado = true
    }
    desligar() {
        this.ligado = false
    }

 }

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.pot = 0
        } else if (e == 1) {
            this.pot = 50
        } else if (e == 2) {
            this.pot = 75
        } else if (e == 3) {
            this.pot = 100
    }
}}

class CarroEspecial extends Carro {
    constructor(estagioTurbo) {
        super(4, estagioTurbo) // super tem que ser a primeira coisa a ser chamada no constructor. Caso contrário, dá erro.
        this.tipoInfo = 1
        this.velMax = 300 + this.turbo.pot
        this.nome = 'Carro especial'
    }
    info() {
        if (this.tipoInfo == 1) {
            super.info() // chama o info() original
        } else {
            console.log(`Nome: ${this.nome}`)
            console.log(`Vel. Máx.: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo.pot}`)
            console.log(`Portas: ${this.portas}`)
            console.log(`Rodas: ${this.rodas}`)
            console.log(`Ligado: ${this.ligado}`)
            console.log('-=-=-=-=-=-=-=-=-')
        }    
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)
// const c4 = new CarroPadrao()

c1.info()
c2.info()
c3.info()