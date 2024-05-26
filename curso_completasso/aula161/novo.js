const addElemento = () => {
    
    const nome = document.querySelector('#f_nome').value;
    const celular = document.querySelector('#f_telefone').value;
    const email = document.querySelector('#f_email').value;
    const dtnasc = document.querySelector('#f_dtnasc').value;

    const dados = {
        "nome": nome,
        "celular": celular,
        "email": email,
        "dtnasc": dtnasc
    };

    const cabecalho = {
        method: 'POST',
        body: JSON.stringify(dados)
    };
    
    const endpoint = 'http://127.0.0.1:1880/addcontatos';
    fetch(endpoint, cabecalho)
    .then(res => {
        if (res.status == 200) {
            console.log('ok');
        } else {
            console.log('erro')
        }
    });

};

document.querySelector('#btn_cancelar').addEventListener("click", () => {
    document.querySelector('#novo').classList.add('ocultar');
});

document.querySelector('#btn_gravar').addEventListener("click", () => {
    addElemento();

    document.querySelector('#novo').classList.add('ocultar');
});