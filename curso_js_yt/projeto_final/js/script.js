function addTask() {

    const taskTitle = document.querySelector('#task-title').value 

    if (taskTitle) { //isso é a mesma coisa de dizer: if (taskTitle != '')
        //clona template
        const template = document.querySelector('.template')

        const newTask = template.cloneNode(true) //clona o texto de template

        //adiciona título
        newTask.querySelector('.task-title').textContent = taskTitle

        //remove as classes desnecessárias
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        //adiciona tarefa na lista
        const list = document.querySelector('#task-list')

        list.appendChild(newTask)

        //evento de remover
        const removeBtn = newTask.querySelector('#remove-btn').addEventListener("click", function() {
            removeTask(this) //this se referindo à própria variável removeBtn
        })

        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('#done-btn').addEventListener("click", function() {
            completeTask(this)
        })

        //limpar input
        document.querySelector('#task-title').value = ''
    }
}


//função de remover tarefas
function removeTask(task) {
    task.parentNode.remove(true)
}

//função de completar a tarefa
function completeTask(task) {
    
    const taskToComplete = task.parentNode

    taskToComplete.classList.toggle("done")

    console.log(taskToComplete)
}


const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener("click", function(e) { //esse "e" vem de event

    e.preventDefault() //isso impede que, ao clicar no botão do tipo "submit", o formulário seja enviado

    addTask()
})