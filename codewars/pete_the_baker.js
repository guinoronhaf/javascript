// const recipe = {flour: 500, sugar: 200, eggs: 1}
// const ingredients = {flour: 1200, sugar: 1200, eggs: 5, milk: 200}

// let array = []
// let oi = [1, 2]
// let ing = Object.values(ingredients)
// let rec = Object.values(recipe)
// let menor = 0

// for (let i = 0; i < ing.length; i++) {
//     array.push(Math.floor(ing[i]/rec[i]))
// }

// for (element of array) {
//     if (element == array[0]) {
//         menor = element
//     } else if (element < menor) {
//         menor = element
//     }
// }

// if (ing.length < rec.length) {
//     console.log(0)
// } else {
//     const min = array.map(Number).reduce(function(a, b) {
//         return Math.min(a, b)
//     })
//     console.log(min)
// }

function cakes(recipe, available) {
    let array = []
    let result = 0
    const avail = Object.values(available)
    const rec = Object.values(recipe)
    for (let i = 0; i < avail.length; i++) {
        array.push(Math.floor(avail[i]/rec[i]))
    }
    for (element of array) {
        if (element == array[0]) {
            result = element
        } else if (element < result) {
            result = element
        }
    }
    if (avail.length < rec.length) {
        return 0
    } else {
        return result
    }
}
