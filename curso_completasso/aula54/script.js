const caixa = document.querySelector('#caixa')

let mapa = new Map()

mapa.set('curso', 'js')
mapa.set(10, 'Vasco')
mapa.set('Mouse', 1000)

console.log(mapa)

mapa.delete('Mouse')

caixa.innerHTML = mapa.get(10)

mapa.forEach((el) => {
    console.log(el)
})