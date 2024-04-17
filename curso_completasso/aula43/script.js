const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', `c${indice}`)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso
    
    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    return novoElemento
}
cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll('input[type=radio')]
    let radioSelecionado = todosRadios.filter((ele) => {
        return ele.checked
    })
    return radioSelecionado[0]//pq retornava um array
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.previousSibling.textContent
    } catch(ex) {
        alert('Selecione um curso.')
    }
})

btnRemoverCurso.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if (rs!=undefined) {
        const cursoSelecionado = rs.parentNode.parentNode//pra remover toda a div
        cursoSelecionado.remove()
    } else {
        alert('Selecione um curso.')
    }
    
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.parentNode
        const novoCurso = criarNovoCurso(nomeCurso.value)
        if (nomeCurso.value != '') {
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)
        } else {
            alert('Escreva algo.')
        }
    } catch(ex) {
        alert('Selecione um curso.')
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.parentNode.nextSibling //pega o próximo irmão do que quer selcionar e insere antes, pois não existe INSERT AFTER
        const novoCurso = criarNovoCurso(nomeCurso.value)
        if (nomeCurso.value != '') {
            caixaCursos.insertBefore(novoCurso, cursoSelecionado) //insere algo antes de alguém
        } else {
            alert('Escreva algo.')
        }
    } catch(ex) {
        alert('Selecione um curso.')
    }
})

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling