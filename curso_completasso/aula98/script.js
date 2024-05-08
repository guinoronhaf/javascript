const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for('Club')
const s4 = Symbol.for('Regatas')

// console.log(s1 == s2) false

// console.log(Symbol.keyFor(s1)) undefined

console.log(Symbol.keyFor(s3))
