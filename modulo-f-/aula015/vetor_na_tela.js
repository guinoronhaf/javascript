let valores = [8, 1, 7, 4, 2, 9]
/*for(let c = 0; c < valores.length; c++) {
     console.log(valores[c])
}  ESTA É A FORMA TRADICIONAL*/

//FORMA OTIMIZADA NAS VERSÕES MAIS RECENTES DO JS

for(let pos in valores) {
    console.log(valores[pos])
}

console.log(valores.indexOf(7))