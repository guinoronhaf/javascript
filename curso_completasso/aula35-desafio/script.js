const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_transferir')
const todos = [...document.querySelectorAll('.curso')]

todos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target //pegar o elemento de fato
        curso.classList.toggle('selecionado')
    })
})

btn.addEventListener("click", () => {
    const selecionados = [...document.querySelectorAll('.selecionado')]
    selecionados.map((el) => {
        caixa2.appendChild(el)
    })
    const retornando = [...document.querySelectorAll('#caixa2 > div')]
    retornando.map((el) => {
        if (!el.classList.contains('selecionado')) {
             caixa1.appendChild(el)
        }
    })

    // ou:
    // const retornando = [...document.querySelectorAll('.curso:not(.selecionado')]
    // retornando.map((el) => {
    //     caixa1.appendChild(el)
    // })
})
