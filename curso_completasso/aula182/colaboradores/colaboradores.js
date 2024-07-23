import { Cxmsg } from "../utils/cxmsg.js";

const dadosGrid = document.querySelector('#dadosGrid');
const btnAdd = document.querySelector('#btn_mainoper');
const tituloPopup = document.querySelector('#tituloPopup');
const novoColaborador = document.querySelector('#novoColaborador');
const btnFechar = document.querySelector('#btn_fechar');
const btnFecharPesq = document.querySelector('#btn_fecharPesq');
const btnGravar = document.querySelector('#btn_gravar');
const btnCancelar = document.querySelector('#btn_cancelar');
const fNome = document.querySelector('#f_nome');
const fTipoColab = document.querySelector('#f_tipoColab');
const fStatus = document.querySelector('#f_status');
const telefones = document.querySelector('#telefones');
const fTel = document.querySelector('#f_tel');
const fFoto = document.querySelector('#f_foto');
const imgFoto = document.querySelector('#img_foto');
const fFilt = document.querySelector('#f_filt');
const pesquisa = document.querySelector('#pesquisa');
const btnSearch = document.querySelector('#btn_search');
const btnPesq = document.querySelector('#btn_pesq');
const btnMostrar = document.querySelector('#btn_mostrar');
const fPesqId = document.querySelector('#f_pesqId');
const fPesqNome = document.querySelector('#f_pesqNome');
const fPesq = document.querySelector('#f_pesq');

const servidor = sessionStorage.getItem("servidorNodeRed");

let modoJanela = "n"; // n => novo colaborador; e => editar
let currentId = null;

fFilt.addEventListener("keyup", (e) => {
    
    const linhas = [...document.querySelectorAll('.linhaGrid')];
    
    let input = e.target.value, filtragem = input.toUpperCase();

    linhas.forEach(l => {
        if (l.children[1].innerHTML.toUpperCase().indexOf(filtragem) > -1) { // vai procurar o texto digitado em cada uma das linhas no Grid.
            l.classList.remove('ocultarLinhaGrid');
        } else {
            l.classList.add('ocultarLinhaGrid');
        }
    })

});

const criarCxTelefone = num => {
    const tel = document.createElement('div');
    tel.setAttribute("class", "tel");

    const numTel = document.createElement('div');
    numTel.setAttribute("class", "numTel");
    numTel.textContent = num;

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
};

const mostrarDadosGrid = (endpoint) => {
    const endpoint_todosColaboradores = `${servidor}${endpoint}`;
    fetch(endpoint_todosColaboradores)
    .then(res => res.json()) 
    .then(resu => {
        dadosGrid.innerHTML = '';
        resu.forEach((e) => {
            const linhaGrid = document.createElement('div');
            linhaGrid.setAttribute("class", "linhaGrid");
    
            const c1 = document.createElement('div');
            c1.setAttribute("class", "colunaLinhaGrid c1");
            c1.textContent = e.n_pessoa_pessoa;
            linhaGrid.appendChild(c1);
    
            const c2 = document.createElement('div');
            c2.setAttribute("class", "colunaLinhaGrid c2");
            c2.textContent = e.s_nome_pessoa;
            linhaGrid.appendChild(c2);
    
            const c3 = document.createElement('div');
            c3.setAttribute("class", "colunaLinhaGrid c3");
            c3.textContent = e.n_tipopessoa_tipopessoa;
            linhaGrid.appendChild(c3);
    
            const c4 = document.createElement('div');
            c4.setAttribute("class", "colunaLinhaGrid c4");
            c4.textContent = e.c_status_pessoa;
            linhaGrid.appendChild(c4);
    
            const c5 = document.createElement('div');
            c5.setAttribute("class", "colunaLinhaGrid c5");
            linhaGrid.appendChild(c5);
    
            const imgStatus = document.createElement('img');
            const urlStatus = c4.textContent=="A"?"../imgs/on.svg":"../imgs/off.svg";
            imgStatus.setAttribute("data-idcolab", e.n_pessoa_pessoa);
            imgStatus.setAttribute("src", urlStatus);
            imgStatus.addEventListener("click", (e) => {
                const id = e.target.dataset.idcolab;
                let status = e.target.parentNode.previousSibling.innerHTML;
            
                const newStatus = status=="A"?"I":"A";

                let endpoint = `${servidor}updatestatus/${id}/${newStatus}`;

                fetch(endpoint, {
                    method: 'POST'
                }).then(res => {
                    if (res.status == 200) {
                        console.log('Status atualizado');
                        mostrarDadosGrid('todapessoa');
                    } else {
                        console.log('erro');
                    }
                })
            });

            c5.appendChild(imgStatus);
    
            const imgEdit = document.createElement('img');
            imgEdit.setAttribute("src", "../imgs/edit.svg");
            imgEdit.setAttribute("id", "btnEdit");
            imgEdit.addEventListener("click", (e) => {
                fNome.value = "";
                fTipoColab.value = "";
                fStatus.value = "";
                fFoto.value = "";
                imgFoto.setAttribute("src", "#");
                telefones.innerHTML = "";
                tituloPopup.innerHTML = 'Editar colaborador(a)';
                modoJanela = "e";
                const id = e.target.parentNode.parentNode.firstChild.innerHTML;
                currentId = id;
                let endpoint = `${servidor}todapessoa/${id}`;
                fetch(endpoint)
                .then(res => res.json())
                .then(d => {
                    fNome.value = d[0].s_nome_pessoa;
                    fTipoColab.value = d[0].n_tipopessoa_tipopessoa;
                    fStatus.value = d[0].c_status_pessoa;
                    imgFoto.setAttribute("src", d[0].s_foto_pessoa); // o problema aqui é pq o campo não tava configurado como "mediumtext"
                    novoColaborador.classList.remove('ocultarPopup');
                    if (imgFoto.getAttribute("src") == "" || imgFoto.getAttribute("src") == "#") {
                        imgFoto.classList.add('ocultarElemento');
                    } else {
                        imgFoto.classList.remove('ocultarElemento');
                    }
                })
    
                endpoint = `${servidor}telefone/${id}`;
                fetch(endpoint)
                .then(res => res.json())
                .then(data => {
                    data.forEach(d => {
                        criarCxTelefone(d.s_numero_telefone);
                    })
                })
            });
            c5.appendChild(imgEdit);
    
            const imgDelete = document.createElement('img');
            imgDelete.setAttribute("src", "../imgs/delete.svg");
            imgDelete.addEventListener("click", (e) => {
                const id = e.target.parentNode.parentNode.firstChild.innerHTML;
                let endpointDelete = `${servidor}deletarcolab/${id}`;
                fetch(endpointDelete, {
                    method: 'DELETE'
                })
                .then(res => {
                    if (res.status == 200) {
                        console.log('Usuário removido');
                    } else {
                        console.log('Erro');
                    }
                })

                endpointDelete = `${servidor}deletartelefones/${id}`;
                fetch(endpointDelete, {
                    method: 'DELETE'
                })
                .then(res => {
                    if (res.status == 200) {
                        console.log('ok')
                    } else {
                        console.log('erro')
                    }
                })

                mostrarDadosGrid('todapessoa');
            });

            imgEdit.setAttribute("id", "btnDelete");

            c5.appendChild(imgDelete);
    
            dadosGrid.appendChild(linhaGrid);
        });
    })
};

mostrarDadosGrid('todapessoa');

const endpoint_tiposColab = `${servidor}tiposcolab`;
fetch(endpoint_tiposColab)
.then(res => res.json())
.then(data => {
    fTipoColab.innerHTML = '';
    data.forEach((e) => {
        const option = document.createElement('option');
        option.setAttribute("value", e.n_tipopessoa_tipopessoa);
        option.textContent = e.s_desc_tipopessoa;
        fTipoColab.appendChild(option);
    });
})

btnMostrar.addEventListener("click", () => {
    mostrarDadosGrid('todapessoa');
});

btnSearch.addEventListener("click", () => {
    pesquisa.classList.remove('ocultarPopup');
    fPesqId.checked = true;
    fPesq.value = "";
});

fPesqId.addEventListener("click", () => {
    fPesq.value = '';
    fPesq.focus();
});

fPesqNome.addEventListener("click", () => {
    fPesq.value = '';
    fPesq.focus();
});

btnPesq.addEventListener("click", () => {
    if (!fPesq.value) {
        const config = {
            titulo: 'Atenção',
            texto: 'Digite nome ou ID do colaborador',
            cor: '#00f',
            tipo: 'ok',
            ok: () => {}, 
            sim: () => {},
            nao: () => {}
        };
        Cxmsg.mostrar(config);
        fPesq.focus();
    } else {
        const tipo = fPesqId.checked?fPesqId.value:fPesqNome.value;
        const valor = fPesq.value;
        
        const endpoint = `pesquisacolab/${tipo}/${valor}`;
        mostrarDadosGrid(endpoint);

        pesquisa.classList.add('ocultarPopup');
    }
});

btnAdd.addEventListener("click", () => {
    modoJanela = "n";
    fNome.value = "";
    fTipoColab.value = "";
    fStatus.value = "";
    fFoto.value = "";
    imgFoto.setAttribute("src", "#");
    telefones.innerHTML = "";
    tituloPopup.innerHTML = 'Novo(a) colaborador(a)';
    // imgFoto.classList.add("ocultarElemento");
    novoColaborador.classList.remove('ocultarPopup');
});

btnFecharPesq.addEventListener("click", () => {
    pesquisa.classList.add('ocultarPopup');
});

btnFechar.addEventListener("click", () => {
    novoColaborador.classList.add('ocultarPopup');
});

btnGravar.addEventListener("click", () => {
    if (modoJanela == "n") {
        const tels = [...document.querySelectorAll('.numTel')];
        let numTels = [];

        tels.forEach(tel => {
            numTels.push(tel.textContent);
        });

        const dados = {
            s_nome_pessoa:fNome.value,
            n_tipopessoa_tipopessoa:fTipoColab.value,
            c_status_pessoa:fStatus.value,
            numTelefones:numTels,
            s_foto_pessoa: imgFoto.getAttribute("src")
        };

        console.log(dados)

        const cabecalho = {
            method: 'POST',
            body: JSON.stringify(dados)
        };
        const endpoint_novoColab = `${servidor}novocolab`;
        fetch(endpoint_novoColab, cabecalho)
        .then(res => {
            if (res.status == 200) {
                Cxmsg.mostrar({
                    titulo: 'Cadastramento de usuário(a)',
                    texto: `Usuário(a) "${fNome.value}" castrado(a) com sucesso!`,
                    cor: '#008',
                    tipo: 'ok',
                    ok: () => {}, 
                    sim: () => {},
                    nao: () => {}
                })
                fNome.value = '';
                fTipoColab.value = '';
                fStatus.value = '';
                fFoto.value = '';
                imgFoto.src = '#';
                telefones.innerHTML = "";
                mostrarDadosGrid('todapessoa');
            } else {
                Cxmsg.mostrar({
                    titulo: 'Erro',
                    texto: 'Falhar ao realizar esta operação. Tente novamente mais tarde.',
                    cor: '#f00',
                    ok: () => {}, 
                    sim: () => {},
                    nao: () => {}
                });
            }
        })
        mostrarDadosGrid('todapessoa');
    } else if (modoJanela == "e") {
        let endpointDelete = `${servidor}deletartelefones/${currentId}`;
        fetch(endpointDelete, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.status == 200) {
               Cxmsg.mostrar({
                titulo: 'Remoção de usuário(a)',
                texto: 'Usuário(a) removido(a) com sucesso!',
                cor: '#008',
                tipo: 'ok',
                ok: () => {},
                sim: () => {},
                nao: () => {},
            })
            } else {
                Cxmsg.mostrar({
                    titulo: 'Erro',
                    texto: 'Falhar ao realizar esta operação. Tente novamente mais tarde.',
                    cor: '#f00',
                    ok: () => {}, 
                    sim: () => {},
                    nao: () => {}
                });
            }
        })

        const tels = [...document.querySelectorAll('.numTel')];
        let numTels = [];

        tels.forEach(tel => {
            numTels.push(tel.textContent);
        });

        const dados = {
            s_nome_pessoa:fNome.value,
            n_tipopessoa_tipopessoa:fTipoColab.value,
            c_status_pessoa:fStatus.value,
            numTelefones:numTels,
            s_foto_pessoa: imgFoto.getAttribute("src")
        };

        let endpointUpdate = `${servidor}updatecolab/${currentId}`;

        fetch(endpointUpdate, {
            method: 'POST',
            body: JSON.stringify(dados)
        })
        .then(res => {
            if (res.status == 200) {
                Cxmsg.mostrar({
                    titulo: 'Atualização de usuário(a)',
                    texto: 'Usuário(a) atualizado(a) com sucesso!',
                    cor: '#008',
                    tipo: 'ok',
                    ok: () => {},
                    sim: () => {},
                    nao: () => {}
                });
                fNome.value = '';
                fTipoColab.value = '';
                fStatus.value = '';
                fFoto.value = '';
                imgFoto.src = '#';
                telefones.innerHTML = "";
            } else {
                Cxmsg.mostrar({
                    titulo: 'Erro',
                    texto: 'Falhar ao realizar esta operação. Tente novamente mais tarde.',
                    cor: '#f00',
                    ok: () => {}, 
                    sim: () => {},
                    nao: () => {}
                });
            }
        }).finally(() => {
            imgFoto.classList.add('ocultarElemento');
        })
        mostrarDadosGrid('todapessoa');
    }

    novoColaborador.classList.add('ocultarPopup');
});

btnCancelar.addEventListener("click", () => {
    novoColaborador.classList.add('ocultarPopup');
});

fTel.addEventListener("keyup", (e) => { //se fosse assim que apertasse a tecla, seria "keydown"; como é ao soltar a tecla: "keyup'"
    if (e.key == 'Enter') {
        const regex = /[\d]{11}/;

        if (regex.test(e.target.value)) {
            criarCxTelefone(e.target.value);
            e.target.value = '';
            e.target.focus();
        } else {
            Cxmsg.mostrar({
                titulo: 'Erro',
                texto: 'Número de telefone inválido',
                cor: '#f00',
                ok: () => {}, 
                sim: () => {},
                nao: () => {}
            });
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
