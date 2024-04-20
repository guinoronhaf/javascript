function arrayDiff(a, b) {
    const c = a.filter((element) => {
        return !b.includes(element)
    })
    return c
}

console.log(arrayDiff([1, 2, 3, 5, 6, 7, 8, 9, 0], [1, 0, 3, 4]))