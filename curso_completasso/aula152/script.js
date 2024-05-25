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
            divMarca.textContent = el.s_marca_produto;
            ;

            const divModelo = document.createElement('div');
            divModelo.setAttribute('class', 'c4');
            divModelo.textContent = el.s_modelo_produto;
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
                });

            });
            divComando.appendChild(imgDelete);

            const imgEdit = document.createElement('img');
            imgEdit.setAttribute('class', 'dgv_icon');
            imgEdit.setAttribute('src', 'edit.svg');
            imgEdit.addEventListener("click", (e) => {
                
                document.querySelector('#janela_editar').classList.remove('ocultar');

                const id = e.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint = `http://127.0.0.1:1880/produto/${id}`;
                fetch(endpoint)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    document.querySelector('#f_ideditar').value = data[0].n_id_produto;
                    document.querySelector('#f_produtoeditar').value = data[0].s_nome_produto;
                    document.querySelector('#f_marcaeditar').value = data[0].s_marca_produto;
                    document.querySelector('#f_modeloeditar').value = data[0].s_modelo_produto;
                });

            });
            divComando.appendChild(imgEdit);

            const imgEye = document.createElement('img');
            imgEye.setAttribute('class', 'dgv_icon');
            imgEye.setAttribute('src', 'view.svg');
            imgEye.addEventListener("click", (e) => {
                
                document.querySelector('#janela_view').classList.remove('ocultar');

                const id = e.target.parentNode.parentNode.firstChild.innerHTML;
                const endpoint = `http://127.0.0.1:1880/produto/${id}`;
                fetch(endpoint)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    document.querySelector('#f_id').value = data[0].n_id_produto;
                    document.querySelector('#f_produto').value = data[0].s_nome_produto;
                    document.querySelector('#f_marca').value = data[0].s_marca_produto;
                    document.querySelector('#f_modelo').value = data[0].s_modelo_produto;
                });

            });
            divComando.appendChild(imgEye);

            const imgAdd = document.createElement('img');
            imgAdd.setAttribute('class', 'dgv_icon');
            imgAdd.setAttribute('src', 'add.svg');
            imgAdd.addEventListener("click", () => {
                document.querySelector('#janela_add').classList.remove('ocultar');
            });
            divComando.appendChild(imgAdd);

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

document.querySelector('#btn_ok').addEventListener("click", () => {
    document.querySelector('#janela_view').classList.add('ocultar');
});

document.querySelector('#btn_salvar').addEventListener("click", () => {
    const id = document.querySelector('#f_ideditar').value;
    const produto = document.querySelector('#f_produtoeditar').value;
    const marca = document.querySelector('#f_marcaeditar').value;
    const modelo = document.querySelector('#f_modeloeditar').value;
    const endpoint = `http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}`;
    fetch(endpoint)
    .then(res => {
        if (res.status == 200) {
            document.querySelector('#janela_editar').classList.add('ocultar');
            dataGridView(configDataGridView);
        } else {
            alert('Erro ao atualizar.')
        }
    });
    
});

document.querySelector('#btn_cancelar').addEventListener("click", () => {
    document.querySelector('#janela_editar').classList.add('ocultar');
});

document.querySelector('#btn_salvaradd').addEventListener("click", () => {
    const produto = document.querySelector('#f_produtoadd');
    const marca = document.querySelector('#f_marcaadd');
    const modelo = document.querySelector('#f_modeloadd');
    const endpoint = `http://127.0.0.1:1880/addproduto/${produto.value}/${marca.value}/${modelo.value}`;
    fetch(endpoint)
    .then(res => res.json())
    dataGridView(configDataGridView);
    produto.value = '';
    marca.value = '';
    modelo.value = '';
    
    document.querySelector('#janela_add').classList.add('ocultar');
});

document.querySelector('#btn_cancelaradd').addEventListener("click", () => {
    document.querySelector('#janela_add').classList.add('ocultar');
})