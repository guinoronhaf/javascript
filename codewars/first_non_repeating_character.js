function firstNonRepeatingLetter(s) {
    for (var pos in s) {
        const regex = new RegExp(`${s[pos]}`, 'ig')
        if (s.match(regex).length == 1) {
            return s[pos]
        }
    }
    return ''
}

console.log(firstNonRepeatingLetter(''))
