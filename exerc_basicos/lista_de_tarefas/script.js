const txtTarefa = document.querySelector('#txt_tarefa')
const btnAdd = document.querySelector('#btn_add')
const tarefasDisplay = document.querySelector('#tarefas_display')
const tarefa = document.querySelector('#tarefa')
const tarefaH = document.querySelector('#tarefa > #title')

tarefasDisplay.innerHTML = ''

btnAdd.addEventListener("click", () => {
    if (!txtTarefa.value) {
        alert('Por favor, digite uma tarefa antes de adicioná-la.')
    } else {
        tarefaH.textContent = txtTarefa.value
        let clone = tarefa.cloneNode(true)
        let chk = clone.querySelector('.check')
        let del = clone.querySelector('.delete')
        let title = clone.querySelector('#title')
        chk.addEventListener("click", () => {
            title.classList.toggle('done')
        })
        del.addEventListener("click", (evt) => {
            evt.target.parentNode.parentNode.remove(true)
        })
        console.log(chk)
        console.log(del)
        tarefasDisplay.appendChild(clone)
        txtTarefa.value = ''
        txtTarefa.focus()
    }
})
