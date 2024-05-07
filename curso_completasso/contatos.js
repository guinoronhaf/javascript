import { contatos } from './bancoContatos.js'

const btnApagarArray = []

const criarBtnApagar = () => {
    const btnApagar = document.createElement('div')
    btnApagar.setAttribute('style', 'display: flex; justify-content:center; align-items: center; width: 30px; height: 30px; background-color: red; color: white; border-radius: 50%; cursor: pointer; align-self: center')
    btnApagar.innerHTML = '<i class="bi bi-trash3"></i>'
    btnApagar.setAttribute('class', 'btnApagar')
    btnApagarArray.push(btnApagar)
}

let contato = {
    getTodosContatos: function() {
        return contatos
    }, 
    getContato: function(i_cont) {
        return contatos[i_cont]
    }, 
    addContato: function(novoContato, destinoDOM) {
        const cont = {
            nome: novoContato.nome, 
            telefone: novoContato.telefone,
            email: novoContato.email,
        }
        contatos.push(cont)
        destinoDOM.innerHTML = ''
        contatos.forEach((el, pos) => {
            const div = document.createElement('div')
            div.setAttribute('class', 'contato')
            const p_nome = document.createElement('p')
            const p_telefone = document.createElement('p')
            const p_email = document.createElement('p')
            p_nome.innerHTML = el.nome
            p_telefone.innerHTML = el.telefone
            p_email.innerHTML = el.email
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            criarBtnApagar()
            div.appendChild(btnApagarArray[pos])
            destinoDOM.appendChild(div)
        })
        // const p_nome = document.createElement('p')
        // p_nome.innerHTML = novoContato.nome
        // const p_telefone = document.createElement('p')
        // p_telefone.innerHTML = novoContato.telefone
        // const p_email = document.createElement('p')
        // p_email.innerHTML = novoContato.email
        // div.appendChild(p_nome)
        // div.appendChild(p_telefone)
        // div.appendChild(p_email)
        // destinoDOM.appendChild(div)
    }, 
    getTodosbtn: function() {
        return btnApagarArray
    }
}

export default contato