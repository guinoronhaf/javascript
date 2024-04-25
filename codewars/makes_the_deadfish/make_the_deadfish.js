function parse(data) {
    let possibilities = ['i', 's', 'd', 'o']
    let result = 0
    let array = []
    
    data.split('').map((el) => {
      if (possibilities.includes(el)) {
        if (el == 'i') {
          result++
        } else if (el == 's') {
          result = result ** 2
        } else if (el == 'd') {
          result--
        } else if (el == 'o') {
          array.push(result)
        }
      }
    })
    
    return array
}

console.log(parse('iiisdoso'))