"use strict"

function teste() {
    let nome = 'Vasco'
    if (true) {
       console.log(`dentro do IF do teste: ${nome}`)
    }
    console.log(`dentro de teste: ${nome}`)
}

teste()

console.log(`fora de teste: ${nome}`)