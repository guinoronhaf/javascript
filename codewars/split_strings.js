function solution(str) {
    let strSplit = str.split('')
    let array = []
    if (strSplit.length % 2 != 0) {
        strSplit.push('_')
    }
    for (let i = 0; i < strSplit.length; i += 2) {
        array.push(`${strSplit[i]}${strSplit[i + 1]}`)
    }
    return array
}

console.log(solution('abc'))
