function toUnderscore(string) {
    const regex = /[A-Z]/g
    string = string.split('').map((element) => {
        if (element.match(regex)) {
            if (element == string.split('')[0]) element = element.toLowerCase()
            else element = `_${element.toLowerCase()}`
        }
        return element
    })
    return string.join('')
}

console.log(toUnderscore('ThisIsFlash'))