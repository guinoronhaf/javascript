const configDataGridView = {
    endpoint: 'http://127.0.0.1:1880/produtos',
    destino: 'dgv_dados'
};

const dataGridView = (config) => {
    
    const destino = document.getElementById(config.destino);
    destino.innerHTML = '';

    fetch(config.endpoint)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        data.forEach((el) => {
            const divLinha = document.createElement('div');
            divLinha.setAttribute('class', 'dgv_linha');

            const divId = document.createElement('div');
            divId.setAttribute('class', 'c1');
            divId.textContent = el.n_id_produto;

            const divProd = document.createElement('div');
            divProd.setAttribute('class', 'c2');
            divProd.textContent = el.s_nome_produto;

            const divMarca = document.createElement('div');
            divMarca.setAttribute('class', 'c3');
            divMarca.textContent = el.s_modelo_produto
            ;

            const divModelo = document.createElement('div');
            divModelo.setAttribute('class', 'c4');
            divModelo.textContent = el.s_nome_produto
            ;

            const divComando = document.createElement('div');
            divComando.setAttribute('class', 'c5');

            const imgDelete = document.createElement('img');
            imgDelete.setAttribute('class', 'dgv_icon');
            imgDelete.setAttribute('src', 'delete.svg');
            imgDelete.addEventListener("click", (e) => {
                const id = e.target.parentNode.parentNode.firstChild.innerHTML;
                const linha = e.target.parentNode.parentNode;
                const endpoint = `http://127.0.0.1:1880/removeproduto/${id}`;
                fetch(endpoint)
                .then(res => {
                    if (res.status == 200) {
                        linha.remove();
                    }
                })

            });
            divComando.appendChild(imgDelete);

            const imgEdit = document.createElement('img');
            imgEdit.setAttribute('class', 'dgv_icon');
            imgEdit.setAttribute('src', 'edit.svg');
            divComando.appendChild(imgEdit);

            const imgEye = document.createElement('img');
            imgEye.setAttribute('class', 'dgv_icon');
            imgEye.setAttribute('src', 'view.svg');
            divComando.appendChild(imgEye)

            divLinha.appendChild(divId);
            divLinha.appendChild(divProd);
            divLinha.appendChild(divMarca);
            divLinha.appendChild(divModelo);
            divLinha.appendChild(divComando);

            destino.appendChild(divLinha);
        });
    });

};

dataGridView(configDataGridView);

