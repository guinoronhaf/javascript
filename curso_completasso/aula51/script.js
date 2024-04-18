//ITERADORES

const valores = [10, 8, 9, 2]
const it_valores = valores[Symbol.iterator]()

const texto = 'Youtube'
const it_texto = texto[Symbol.iterator]()

console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next()) //é assim que algumas funções sabem quando percorreram todo o array --> o retorno do "done" é 'false', indicando que todo o array foi percorrido.

console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next()) // também serve para strings.