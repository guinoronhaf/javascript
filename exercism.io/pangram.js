const isPangram = (word) => {
    if (!word) return false;
    const onlyLetters = word.match(/[a-z]/ig);
    let aux = [], count = 0;
    onlyLetters.map((letter) => {
      const validation = new RegExp(letter, 'i');
      if (!validation.test(aux.join(''))) {
        aux.push(letter);
        count++;
      }
    });
    return count >= 26?true:false;
};

console.log(isPangram('five boxing wizards jump quickly at it'));