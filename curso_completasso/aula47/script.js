const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementos_array = ['html', 'css', 'javascript', 'php', 'c++', 'java']
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = 'Valor não encontrado.'
    const ret = elementos_array.find((e, i) => {//e(elemento); i(posição)
        if (e.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
            resultado.innerHTML = `${e} está contido no array na posiçaõ ${i}!`
            return e
        }
    })
    console.log(ret)
})