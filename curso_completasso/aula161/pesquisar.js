const btnPesq = document.querySelector('#btn_pesq');
const txtPesq = document.querySelector('#f_txtpesq');
const dados = document.querySelector('#resultado_dados');

btnPesq.addEventListener("click", (e) => {
    const valorPesq = txtPesq.value;
    
    if (!valorPesq) {
        alert('Digite a pesquisa.')
        txtPesq.focus();
        return;
    } else {
        const fPesq = document.querySelector('input[name=f_pesq]:checked').value;
    
        const endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${fPesq}/${valorPesq}`;
    
        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            dados.innerHTML = '';
            mostrarDados(data);
        });
    }


});

const mostrarDados = (lista) => {
    
    lista.map((el) => {
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

        dados.appendChild(linha);
    });

};

export {mostrarDados};