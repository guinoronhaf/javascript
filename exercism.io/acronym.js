const parse = (phrase) => {
    const regex = /[-_]/ig;
    phrase = phrase.replace(regex, ' ');
    let result = [];
    phrase.split(' ').map((word) => {
        /[\w]/.test(word[0])?result.push(word[0]):'';
    });
    return result.join('').toUpperCase();
};

console.log(parse("The Road _Not_ Taken"));
