class Carro {
    clube = 'Gigante da Colina' // clube é também uma propriedade. Ademais, fica valendo para todos os objetos da classe, de modo que não é necessário utilizar o 'this'.
    constructor(pnome, ptipo) {
        this.nome = pnome
        this.clube = 'Vasco da Gama'
        if (ptipo == 1) {
            this.tipo = 'Esportivo'
            this.velmax = 300
        } else if (ptipo == 2) {
            this.tipo = 'Utilitário'
            this.velmax = 100
        } else if (ptipo == 3) {
            this.tipo = 'Passeio'
            this.velmax = 160
        } else {
            this.tipo = 'Militar'
            this.velmax = 180
        }
    }
    getInfo() {
        return [this.nome, this.tipo, this.velmax, this.clube]
    }
    setNome(nome){
        this.nome = nome
    }
    info() { // essa é a criação de um método.
        console.log(`${this.nome} é um carro do tipo "${this.tipo}" e atinge uma velocidade máxima de ${this.velmax} km/h pelo canal ${this.clube}.`)
    }
}

let c1 = new Carro('Rapidão', 1)
let c2 = new Carro('Super luxo', 3)

c1.info() 
c2.info()
c1.setNome('Super hiper mega rapidão')
c1.info()
console.log(c1.getInfo())