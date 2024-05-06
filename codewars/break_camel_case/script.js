let str = 'camelCasing'

let strSplit = str.split('')

strSplit.forEach((el, pos) => {
    if (el != el.toLocaleUpperCase) {
        console.log('diferente')
    } else {
        console.log(`igual na posição ${pos}`)
    }
})
// let arr = [1, 2, 3]

// arr.splice(1, 0, 0)

// console.log(arr)