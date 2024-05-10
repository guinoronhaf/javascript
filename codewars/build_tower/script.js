function towerBuilder(nFloors) {
    let result = []
    let numberOfSymbols = []
    for (let n = 1; n < nFloors * 2; n += 2) {
        numberOfSymbols.push(n)
    }
    for (let i = 1; i <= nFloors; i++) {
        result.push(`${' '.repeat(nFloors - i)}${'*'.repeat(numberOfSymbols[i - 1])}${' '.repeat(nFloors - i)}`)
    }
    return result
}

console.log(towerBuilder(5))
