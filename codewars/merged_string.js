// let s = 'codewars'
// let p1 = 'cdw'
// let p2 = 'oear'
// let ss = p1.concat(p2)

// console.log(s.match(p2))


// let d = s.split('').every((el) => {
//     return ss.includes(el)
// })

// console.log(d)



// let d = ss.split('').filter(el => {
//     return s.includes(el)
// })

// if(d.length == s.length) {
//     console.log('ok')
// } else {
//     console.log('erro')
// }

// function isMerge(s, part1, part2) {
//     const conc = part1.concat(part2)
//     var test = s.split('').every(el => {
//         return conc.includes(el)
//     })
//     if (test && s.length == conc.length) return true
//     else return false
// }

// console.log(isMerge('codewars', 'code', 'code'))


// let s = 'xcyc'
// let ss = s.split('')
// let p1 = 'xc'
// let p2 = 'yc'

// const c = p1.split('').map((el, pos) => {
//     return ss.splice(ss.indexOf(el), 1)
// })

// if (c.join('') == p1 && ss.join('') == p2 || c.join('') == p1 && ss.reverse().join('') == p2 || c.reverse().join('') == p1 && ss.join('') == p2) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// console.log(c.join(''))
// console.log(ss.join(''))

function isMerge(s, part1, part2) {
    part1 = part1.concat(part2);
    part1 = part1.replace(/ /g, '').split('').sort().join('');
    s = s.replace(/ /g, '').split('').sort().join('');

    return s === part1 ? true:false;
};