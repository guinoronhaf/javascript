const primeFactors = (number) => {
    let result = [], divisor = 2, current = number;
    while (current != 1) {
        if (current % divisor == 0) {
            current = current/divisor;
            result.push(divisor);
        } else {
            divisor++;
        }
    };
    return result;
};

console.log(primeFactors(2));