let num = document.querySelector('#inum')
let tabela = document.querySelector('#seldados')
let res = document.querySelector('#res')
let array = []


function isnumero(n) {
    if (n > 1 && n < 100) {
        return true
    } else {
        return false
    }
}


function isinLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isnumero(num.value) && !isinLista(num.value, array)) {
        array.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado.`
        tabela.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('ERRO! Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //apaga o número do input depos que adiciona
    num.focus()
}


function finalizar() {
    if (array.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tot = array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        for (let pos in array) {
            if (array[pos] > maior) 
                maior = array[pos]
            if (array[pos] < menor) 
                menor = array[pos]
            soma += array[pos]
        }
        

        res.innerHTML = ''
        res.innerHTML += `<p>${tot} valores foram cadastrados.</p> <br>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p> <br>`
        res.innerHTML += `<p>O maior valor é ${menor}.</p> <br>`
        res.innerHTML += `<p>A soma dos valores cadastrados é ${soma}.</p> <br>`
        res.innerHTML += `<p>A média entre os valores adicionados é de ${soma/tot}.</p>`
    }
}