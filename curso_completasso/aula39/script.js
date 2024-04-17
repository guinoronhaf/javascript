const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

//primeira forma
// console.log(caixa1.hasChildNodes()); retorna um boolean

//segunda forma
// if (btn_c[0].children.length > 0) {
//     console.log('Possui filhos')
// } else {
//     console.log('não possui filhos')
// }

//terceira forma
// console.log(caixa1.children.length > 0 ? 'Possui filhos' : 'Não possui filhos')