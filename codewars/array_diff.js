function arrayDiff(a, b) {
    const c = a.filter((element) => {
        return !b.includes(element)
    })
    return c
}

console.log(arrayDiff([3, 6, 7, 8, 12, 3], [4, 3, 12, 11, 5]))