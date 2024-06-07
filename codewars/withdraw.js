//NÇAOC ONSEGUI

function withdraw(n) {
    let r = [0, 0, 0];
    while (n % 50) { // enquanto esse resultado for diferente de 0
        r[2]++;
        n -= 20;
    };
    r[0] = Math.floor(n/100);
    r[1] = Math.floor((n - (r[0]*100))/50);
    return r;
};

console.log(withdraw(230));