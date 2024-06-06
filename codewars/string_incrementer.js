function incrementString (string) {

    if (!/\d/.test(string)) return `${string}1`;
    else {
        const valueBefore = string.match(/[1-9]/g).join('');
        const valueAfter = Number(valueBefore) + 1;
        let i = 0;
        while (i < new String(valueAfter).length - new String(valueBefore).length) {
            string = string.replace(string.match(/0/), '');
            i++;
        };
        return string.replace(string.match(valueBefore), new String(valueAfter));
    }

};

console.log(incrementString('fo99obar99'));
