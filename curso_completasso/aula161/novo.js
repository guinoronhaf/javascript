const nome = document.querySelector('#f_nome');
const celular = document.querySelector('#f_telefone');
const email = document.querySelector('#f_email');
const dtnasc = document.querySelector('#f_dtnasc');

const addElemento = () => {
    
    const dados = {
        "nome": nome.value,
        "celular": celular.value,
        "email": email.value,
        "dtnasc": dtnasc.value
    };

    const cabecalho = {
        method: 'POST',
        body: JSON.stringify(dados)
    };
    
    const endpoint = 'http://127.0.0.1:1880/addcontatos';
    fetch(endpoint, cabecalho)
    .then(res => {
        if (res.status == 200) {
            nome.value = '';
            celular.value = '';
            email.value = '';
            dtnasc.value = '';
            nome.focus();
        } else {
            console.log('Erro.')
        }
    });

};

const reset = () => {
    nome.value = '';
    celular.value = '';
    email.value = '';
    dtnasc.value = '';
    nome.focus();
}

document.querySelector('#btn_cancelar').addEventListener("click", () => {
    reset();
});

document.querySelector('#btn_gravar').addEventListener("click", () => {
    addElemento();
});