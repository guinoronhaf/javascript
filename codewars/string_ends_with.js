function solution(str, ending) {
    const strRev = [...str].reverse()
    const endingRev = [...ending].reverse()
    const res = endingRev.every((el, pos) => {
        return el == strRev[pos]
    })
    return res
}

console.log(solution('abc', 'b'))

// let str = 'abc'
// let ending = 'bc'
// const res = str.endsWith(ending)
// console.log(res)