function Pessoa(pnome, pidade) {
    this.nome = pnome,
    this.idade = pidade,

    this.getNome = function() {
        return this.nome
    },
    this.getIdade = function() {
        return this.idade
    },
    this.setNome = function(nome) {
        this.nome = nome
    },
    this.setIdade = function(idade) {
        this.idade = idade
    },
    this.info = function() {
        console.log(`Nome..: ${this.nome}`)
        console.log(`Idade..: ${this.idade}`)
        console.log('-=-=-=-=-=-=-=-=-=-=-=--=-')
    }
}

let pessoas = []
const btnAdd = document.querySelector('#btn_add')
const res = document.querySelector('.res')
const fNome = document.querySelector('#f_nome')
const fIdade = document.querySelector('#f_idade')

const addPessoa = () => {
    res.innerHTML = ''
    pessoas.map((p) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `${p.getNome()} tem ${p.getIdade()} anos.`
        res.appendChild(div)
    })
}

btnAdd.addEventListener("click", () => {
    const p = new Pessoa(fNome.value, fIdade.value)
    pessoas.push(p)
    fNome.value = ''
    fIdade.value = ''
    fNome.focus() // quando clicar no botão de "Adicionar", o foco vai ser no fNome.
    addPessoa()
})