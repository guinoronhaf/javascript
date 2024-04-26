function pigIt(str) {
    let result = []
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    str.split(' ').forEach((el) => {
        const verify = el.toLowerCase().split('').every((charac) => {
            return alpha.includes(charac)
        })
        if (verify) {
            const add = el.split('')
            add.push(add[0])
            add.push('ay')
            add.shift()
            const addJoin = add.join('')
            result.push(addJoin)
        } else {
            result.push(el)
        }
    })
    return result.join(' ')
}

console.log(pigIt('Hello world !'))