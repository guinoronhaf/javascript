const p = 'fjd3IR9'
// const regex = /[^a-z0-9]/ig
// if (/[a-z]{1,}/g.test(p) && /[A-Z]{1,}/g.test(p) && /[\d]{1,}/g.test(p) && !/[^a-z0-9]/ig.test(p) && p.length >= 6) {
//     console.log('true')
// } else {
//     console.log('false')
// }

const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\a-zA-Z0-9]{6,}$/

console.log(regex.test(p))
