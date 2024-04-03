var agora = new Date()
var dia = agora.getDay() /*a questão é que a resposta é dada em números --> 1, 2, 3...*/
switch(dia) {
    case 0:
        console.log(`Hoje é domingo.`)
        break
    case 1:
        console.log(`Hoje é segunda.`)
        break
    case 2:
        console.log(`Hoje é terça.`)
        break
    case 3:
        console.log(`Hoje é quarta.`)
        break
    case 4:
        console.log(`Hoje é quinta.`)
        break
    case 5:
        console.log(`Hoje é sexta.`)
        break
    case 6:
        console.log(`Hoje é sábado.`)
        break
    default:
        console.log('Dia inválido.') //no default, o "break" não é necessário.
}