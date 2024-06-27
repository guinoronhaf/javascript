const dadosGrid = document.querySelector('#dadosGrid');
const btnAdd = document.querySelector('.btn_mainoper');
const novoColaborador = document.querySelector('#novoColaborador');
const btnFechar = document.querySelector('#btn_fechar');
const btnGravar = document.querySelector('#btn_gravar');
const btnCancelar = document.querySelector('#btn_cancelar');
const fNome = document.querySelector('#f_nome');
const fTipoColab = document.querySelector('#f_tipoColab');
const fStatus = document.querySelector('#f_status');
const telefones = document.querySelector('#telefones');
const fTel = document.querySelector('#f_tel');
const fFoto = document.querySelector('#f_foto');
const imgFoto = document.querySelector('#img_foto');
const endpoint_todosColaboradores = `http://127.0.0.1:1880/todosusuarios`;

fetch(endpoint_todosColaboradores)
.then(res => res.json()) 
.then(data => {
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

    const tels = [...document.querySelectorAll('.numTel')];
    let numTels = [];

    tels.forEach(tel => {
        numTels.push(tel.textContent);
    });

    const dados = {
        s_nome_usuario:fNome.value,
        n_tipousuario_tipousuario:fTipoColab.value,
        c_status_usuario:fStatus.value,
        numTelefones:numTels,
        s_foto_usuario: imgFoto.getAttribute("src")
    };

    const cabecalho = {
        method: 'POST',
        body: JSON.stringify(dados)
    };
    const endpoint_novoColab = `http://127.0.0.1:1880/novocolab`;
    fetch(endpoint_novoColab, cabecalho)
    .then(res => {
        if (res.status == 200) {
            alert('Novo usuário cadastrado');
        } else {
            alert('Erro ao cadastrar usuário');
        }
    })

    novoColaborador.classList.add('ocultarPopup');

});

btnCancelar.addEventListener("click", () => {
    novoColaborador.classList.add('ocultarPopup');
});

fTel.addEventListener("keyup", (e) => { //se fosse assim que apertasse a tecla, seria "keydown"; como é ao soltar a tecla: "keyup'"
    if (e.key == 'Enter') {
        const regex = /[\d]{11}/;

        if (regex.test(e.target.value)) {
            const tel = document.createElement('div');
            tel.setAttribute("class", "tel");

            const numTel = document.createElement('div');
            numTel.setAttribute("class", "numTel");
            numTel.textContent = e.target.value;

            const delTel = document.createElement('img');
            delTel.setAttribute("class", "delTel");
            delTel.setAttribute("src", "../imgs/delete.svg");
            delTel.setAttribute("alt", "Deletar número");
            delTel.setAttribute("title", "Deletar número");
            delTel.addEventListener("click", (e) => {
                e.target.parentNode.remove();
            });

            tel.appendChild(numTel);
            tel.appendChild(delTel);

            telefones.appendChild(tel);

            e.target.value = '';
            e.target.focus();

        } else {
            alert('Numero de telefone inválido');
        }
    }
});

const converte_imagem_b64 = (localDestino, arquivoImg) => {
    const obj = arquivoImg;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const res = reader.result;
        localDestino.src = res;
    });
    if (obj) {
        reader.readAsDataURL(obj);
    }
};

fFoto.addEventListener("change", (e) => {
    converte_imagem_b64(imgFoto, e.target.files[0]); //pois "files" é um array, e deseja-se pegar só o arquivo principal -> 0
});
