let num = document.querySelector('#inum')
let res = document.querySelector('#res')
let valores = []


function primoOuNao() {
    res.innerHTML = ''

    
    for (let c = 1; c < num.value; c++) {
        if (num.value % c == 0) {
            valores.push(c)
        }
    }

    let n = document.createElement('h1')
    n.innerHTML += num.value
    n.style.fontSize = '5em'
    n.style.fontWeight ='bolder'
    res.appendChild(n)

    if (valores.length == 1 && valores[0] == 1 || num.value == 1) {
        res.innerHTML += `<p>O número ${num.value} <strong>é primo.</strong></p>`
    } else {
        res.innerHTML += `O número ${num.value} <strong>não é primo.</strong>`
    }
    valores = []
    num.value = ''
    num.focus()
}