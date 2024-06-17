const isPrime = n => {
    let divisors = 0; i = 1;
    while (i <= n) {
      n%i==0?divisors++:divisors+=0;
      i++;
    };
    return divisors<=2?true:false;
};

const prime = number => {
  let checks = 2, result = [];
  while (checks <= number) {
    isPrime(checks)?result.push(checks):'';
    checks++;
  };
  return result;
};

console.log(prime(11));