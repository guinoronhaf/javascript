class Npc {
    static alerta = false 
    constructor(energia) {
        this.energia = energia
    }
    info = function() {
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?'Sim':'Não'}`)// Npc alerta --> vale para todos os objetos instanciados a partir da classe Npc.
        console.log('-=-=-=--==-=-=-=-=')
    }
    static alertar = function() {
        Npc.alerta = true
    }
    static descansar = function() {
        Npc.alerta = false
    }
}

// npc1.alertar() --> não funciona pois o método "alertar" não é do objeto, mas da classe. Portanto o certo seria: "Npc.alertar("

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.descansar()

npc1.info()
npc2.info()
npc3.info()