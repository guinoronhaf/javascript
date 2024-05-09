let nome = new String('Guilherme Noronha Fragoso 2006')
let email = 'guilherme@guilherme.com.br'
let numeros = '1, 10, 100, 1000'

console.log(nome.search(/noronha/i))

console.log(nome.match(/e/ig))

console.log(nome.match(/[a-c|0-9]/ig))

// Metacaracteres
console.log(nome.match(/\d/ig)) // dígitos
console.log(nome.match(/\s/ig)) // espaços
console.log(nome.match(/\bG/ig))

// Quantificadores
console.log(numeros)
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))
