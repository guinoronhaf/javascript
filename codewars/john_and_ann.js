let katasAnn = [1], katasJohn = [0];

function counting(n) {
    let day = katasAnn.length;
    while(day < n) {
        katasJohn.push(day - katasAnn[katasJohn[day - 1]]);
        katasAnn.push(day - katasJohn[katasAnn[day - 1]]);
        day++;
    }
    return n;
};

let john = n => katasJohn.slice(0, counting(n));
let ann = n => katasAnn.slice(0, counting(n));
let sumJohn = n => john(n).reduce((a, b) => a+b, 0);
let sumAnn = n => ann(n).reduce((a, b) => a+b, 0);

console.log(john(11));
console.log(ann(6));
console.log(sumJohn(75));
console.log(sumAnn(150));