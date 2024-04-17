// const cursos = ['html', 'css', 'javascript', 'php', 'react']
// cursos.map((el, i) => { //1o parâmetro: elemento; 2o parâmetro: posição
//     console.log(`curso de ${el} na posição ${i}.`)
// })  ctrl + ; comenta tudo e descomenta depois

// let el = document.getElementsByTagName('div')
// el = [...el] //... significa "spread"; ele serve para espalhar os elementos e transformá-los numa coleção iterável para ser percorrida pelo método map.
// el.map((e, i) => {
//     e.innerHTML += ' é legal'
// })

// const el = document.getElementsByTagName('div')
// const valores = Array.prototype.map.call(el, ({innerHTML}) => innerHTML)
// console.log(valores)

const converterInt = (e) => parseInt(e)
let num = ['1', '2', '3', '4', '5'].map(converterInt)
console.log(num)