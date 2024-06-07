let a = [5, 1, 3, 4, 1];


const numbers = [1, 6, 5, 4, 3, 2, 1, 5]
const quantity = [3, 3, 3, 3, 3, 3, 1, 1];
const points = [1000, 600, 500, 400, 300, 200, 100, 50];

let p = 0;

numbers.map((el, pos) => {
   const regex = new RegExp(el, 'g');
   let aJoin = a.join('');
   let tam = aJoin.match(regex)?aJoin.match(regex).length:[].length;
   if (tam >= quantity[pos]) {
        p += points[pos];
        // for (let i = 0; i < aJoin.match(regex).length; i++) {
        //     const val = new RegExp(el);
        //     a = aJoin.replace(aJoin.match(val), '').split('');
        // };
        // console.log(quantity[pos]);
        // console.log(points[pos]);
        console.log(el)
        console.log(tam);
        console.log('-=-=-')
   };
    // console.log(aJoin.match(regex)?aJoin.match(regex).length:[].length);
});

console.log(p);