const f_nome = document.querySelector('#f_nome')
const f_nota = document.querySelector('#f_nota')
const f_msg = document.querySelector('#f_msg')

// document.querySelector('#btn_validar').addEventListener("click", (evt) => {
//     let estadoValidacao = f_nota.validity

//     if (estadoValidacao.valueMissing) {
//         f_nota.setCustomValidity('Este campo é obrigatório.')
//     } else if (estadoValidacao.rangeOverflow) {
//         f_nota.setCustomValidity('Eita! Passou do ponto.')
//     } else if (estadoValidacao.rangeUnderflow) {
//         f_nota.setCustomValidity('Suba mais um pouco.')
//     }
//     f_nota.reportValidity()
//     // f_msg.innerHTML = f_nota.validationMessage
//     evt.preventDefault()
// })


document.querySelector('#btn_validar').addEventListener("click", (evt) => {
    let msg = null

    if (f_nota.validity.valueMissing) {
        msg = 'Este campo é obrigatório.'
    } else if (f_nota.validity.rangeOverflow) {
        msg = 'Eita! Passou do ponto.'
    } else if (f_nota.validity.rangeUnderflow) {
        msg = 'Suba mais um pouco.'
    }
    // f_nota.reportValidity()
    f_msg.innerHTML = f_nota.validationMessage
    evt.preventDefault()
})