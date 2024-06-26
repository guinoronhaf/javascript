const dadosGrid = document.querySelector('#dadosGrid');
const btnAdd = document.querySelector('.btn_mainoper');
const novoColaborador = document.querySelector('#novoColaborador');
const btnFechar = document.querySelector('#btn_fechar');
const btnGravar = document.querySelector('#btn_gravar');
const btnCancelar = document.querySelector('#btn_cancelar');
const fTipoColab = document.querySelector('#f_tipoColab');
const endpoint_todosColaboradores = `http://127.0.0.1:1880/todosusuarios`;

fetch(endpoint_todosColaboradores)
.then(res => res.json()) 
.then(data => {
    console.log(data);
    dadosGrid.innerHTML = '';
    data.forEach((e) => {
        const linhaGrid = document.createElement('div');
        linhaGrid.setAttribute("class", "linhaGrid");

        const c1 = document.createElement('div');
        c1.setAttribute("class", "colunaLinhaGrid c1");
        c1.textContent = e.n_usuario_usuario;
        linhaGrid.appendChild(c1);

        const c2 = document.createElement('div');
        c2.setAttribute("class", "colunaLinhaGrid c2");
        c2.textContent = e.s_nome_usuario;
        linhaGrid.appendChild(c2);

        const c3 = document.createElement('div');
        c3.setAttribute("class", "colunaLinhaGrid c3");
        c3.textContent = e.n_tipousuario_tipousuario;
        linhaGrid.appendChild(c3);

        const c4 = document.createElement('div');
        c4.setAttribute("class", "colunaLinhaGrid c4");
        c4.textContent = e.c_status_usuario;
        linhaGrid.appendChild(c4);

        const c5 = document.createElement('div');
        c5.setAttribute("class", "colunaLinhaGrid c5");
        linhaGrid.appendChild(c5);

        dadosGrid.appendChild(linhaGrid);
    });
});

const endpoint_tiposColab = `http://127.0.0.1:1880/tiposcolab`;
fetch(endpoint_tiposColab)
.then(res => res.json())
.then(data => {
    fTipoColab.innerHTML = '';
    data.forEach((e) => {
        const option = document.createElement('option');
        option.setAttribute("value", e.n_tipousuario_tipousuario);
        option.textContent = e.s_desc_tipousuario;
        fTipoColab.appendChild(option);
    });
})

btnAdd.addEventListener("click", () => {
    novoColaborador.classList.remove('ocultarPopup');
});

btnFechar.addEventListener("click", () => {
    novoColaborador.classList.add('ocultarPopup');
});

btnGravar.addEventListener("click", () => {
    novoColaborador.classList.add('ocultarPopup');
});

btnCancelar.addEventListener("click", () => {
    novoColaborador.classList.add('ocultarPopup');
});
