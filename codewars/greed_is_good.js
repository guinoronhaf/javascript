// let a = [5, 1, 3, 4, 1];
// let aJoin = a.join('');

// let points = 0;

// const rules = {
//     '[1]': [3, 1000] ,
//     '[6]': [3, 600],
//     '[5]': [3, 500],
//     '[4]': [3, 400],
//     '[3]': [3, 300],
//     '[2]': [3, 200],
//     '[1]': [1, 100],
//     '[5]': [1, 50]
// };

// Object.keys(rules).map((el) => {
//     const regex = new RegExp(el, 'g');
//     if (aJoin.match(regex)) {
//         console.log(aJoin.match(regex));
//         if (aJoin.match(regex).length == rules[el][0]) {
//             points += rules[el][1];
//         }
//     } 
// })

console.log(points);