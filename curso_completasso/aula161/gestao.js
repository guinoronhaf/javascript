const dados = document.querySelector('#resultado_dados');
const fundoPopUp = document.querySelector('#fundopopup');
const btnGravar = document.querySelector('#btn_gravar');
const btnCancelar = document.querySelector('#btn_cancelar');

const preencher = () => {
    
    dados.innerHTML = '';

    const endpoint = `http://127.0.0.1:1880/contatos`;
    
    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        data.map((el) => {
            const linha = document.createElement('div');
            linha.setAttribute('class', 'dados_linha');
    
            const id = document.createElement('div');
            id.setAttribute('class', 'c1');
            id.textContent = el.n_contato_contato;
            linha.appendChild(id);
    
            const nome = document.createElement('div');
            nome.setAttribute('class', 'c2');
            nome.textContent = el.s_nome_contato;
            linha.appendChild(nome);
    
            const email = document.createElement('div');
            email.setAttribute('class', 'c3');
            email.textContent = el.s_email_contato;
            linha.appendChild(email);
    
            const telefone = document.createElement('div');
            telefone.setAttribute('class', 'c4');
            telefone.textContent = el.s_celular_contato;
            linha.appendChild(telefone);
    
            const dt = document.createElement('div');
            dt.setAttribute('class', 'c5');
            dt.innerHTML = el.dt_dtnasc_contato.slice(0, 10);
            linha.appendChild(dt);

            const operacoes = document.createElement('div');
            operacoes.setAttribute('class', 'c6');

            const imgDelete = document.createElement('img');
            imgDelete.setAttribute('src', 'delete.svg');
            imgDelete.classList.add('icons');
            imgDelete.addEventListener("click", (e) => {
                const id = e.target.parentNode.parentNode.firstChild.textContent;
                deletar(id);
            });
            operacoes.appendChild(imgDelete);

            const imgEdit = document.createElement('img');
            imgEdit.setAttribute('src', 'edit.svg');
            imgEdit.classList.add('icons');
            imgEdit.addEventListener("click", (e) => {
                fundoPopUp.classList.remove('ocultar');
                const inputs = [...document.getElementsByTagName('input')];
                inputs.map((el, pos) => {
                    el.value = [...e.target.parentNode.parentNode.childNodes][pos].innerHTML;
                });
            });
            operacoes.appendChild(imgEdit);

            linha.appendChild(operacoes);
    
            dados.appendChild(linha);
        });
    });

};

preencher();

const deletar = (id) => {

    const endpoint = `http://127.0.0.1:1880/deletarcontatos/${id}`;

    fetch(endpoint)
    .then(res => {
        if (res.status == 200) { // sucesso
            preencher();
        } else {
            alert('Erro ao remover elemento.')
        }
    })

};

btnCancelar.addEventListener("click", () => {
    fundoPopUp.classList.add('ocultar');
});
