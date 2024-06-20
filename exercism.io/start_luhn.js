const cn = '8273 1232 7352 0569';
var cnn = cn.split(' ');
cnn = cnn.map((el) => {
    const doubling = `${el[0]*2>9?el[0]=(el[0]*2)-9:el[0]=el[0]*2}${el[1]}${el[2]*2>9?el[2]=(el[2]*2)-9:el[2]=el[2]*2}${el[3]}`;
    el = doubling;
    return el;
});

const sum = cnn.join('').split('').reduce((a, b) => {
    return Number(a) + Number(b);
});

sum%10==0?console.log('true'):console.log('false');