const Pessoa = {
    nome: '',
    idade: '',  
    getNome: function () {
        return this.nome
    }, 
    getIdade: function() {
        return this.idade
    }, 
    setNome: function(nome) {
        this.nome = nome
    }, 
    setIdade: function(idade) {
        this.idade = idade
    }
}

const fNome = document.querySelector('#f_nome')
const fIdade = document.querySelector('#f_idade')
const btnAdd = document.querySelector('#btn_add')
const res = document.querySelector('.res')

const addPessoa = () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'pessoa')
    div.innerHTML = `${Pessoa.nome} tem ${Pessoa.idade} anos.`
    res.appendChild(div)
}

btnAdd.addEventListener("click", () => {
    Pessoa.nome = fNome.value
    Pessoa.idade = fIdade.value
    fNome.value = ''
    fIdade.value = ''
    fNome.focus()
    addPessoa()
})