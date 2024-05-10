function findOutlier(integers) {
    let e = []
    let o = []
    integers.map((number) => {
        number % 2 == 0?e.push(number):o.push(number)
    })
    if (e.length > 1) return o[0]
    else if (o.length > 1) return e[0]
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))