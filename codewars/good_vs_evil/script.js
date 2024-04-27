function goodVsEvil(good, evil) {
    const goodSide = [1, 2, 3, 3, 4, 10]
    const evilSide = [1, 2, 2, 2, 3, 5, 10]
    let g = 0
    let e = 0
    good.split(' ').forEach((el, pos) => {
        g += Number(el) * goodSide[pos]
    })
    evil.split(' ').forEach((el, pos) => {
        e += Number(el) * evilSide[pos]
    })
    if (g > e) {
        return 'Battle Result: Good triumphs over Evil'
    } else if (g < e) {
        return 'Battle Result: Evil eradicates all trace of Good'
    } else {
        return 'Battle Result: No victor on this battle field'
    }
}

console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))