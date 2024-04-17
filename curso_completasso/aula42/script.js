const idades = [15, 21, 30, 17, 18, 44, 12, 50]
const maior = idades.filter((el) => {
    if (el >= 18) {
        return el
    }
})
const menor = idades.filter((el) => {
    if (el < 18) {
        return el
    }
})


console.log(idades)
console.log(maior)
console.log(menor)