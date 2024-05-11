function towerBuilder(nFloors) {
    let result = []
    for (let i = 1; i <= nFloors; i++) {
        result.push(`${' '.repeat(nFloors - i)}${'*'.repeat(i + i - 1)}${' '.repeat(nFloors - i)}`)
    }
    return result
}


console.log(towerBuilder(5))
