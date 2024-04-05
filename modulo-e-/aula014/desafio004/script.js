function tabuada() {
    let num = document.querySelector('#inum')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0 || num.value == 0) {
        window.alert('Por favor, digite um número diferente de zero.')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //limpa o select pra não juntar várias tabuadas.
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            c++
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}