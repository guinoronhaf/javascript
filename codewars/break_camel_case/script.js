function solution(string) {
    const regex = /[A-Z]/g
    string = string.split('').map((character) => {
      if (character.match(regex)) character = ` ${character}`
      return character  // como se trata de uma função (ainda que anônima), é preciso retornar o elemento para o array
    })
    return string.join('')
}