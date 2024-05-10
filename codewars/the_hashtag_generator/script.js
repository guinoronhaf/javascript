function generateHashtag(str) {
    let result = []
    let strS = str.trim().split(' ')
    strS = strS.filter((element) => {
        return element != ''
    })
    strS.map((word) => {
        result.push(word.replace(word[0], word[0].toUpperCase()))
    })
    if (result.join('').length >= 140 || str.trim().length == 0) return false
    else {
        result.unshift('#')
        return result.join('')
    }
}

console.log(generateHashtag(" ".repeat(200)))