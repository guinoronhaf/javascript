function sum(number) {
    let s = 0
    for (let i = 0; i < number.toString().length; i++) {
        s += Number(number.toString()[i])
    }
    return s
}

function digitalRoot(n) {
    let finalResult = sum(n)
    // let result2 = sum(result1)
    while (finalResult.toString().length != 1) {
        finalResult = sum(finalResult)
    }
    return finalResult
}

console.log(digitalRoot(132189))
