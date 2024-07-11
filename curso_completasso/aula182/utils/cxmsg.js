class Cxmsg {

    static config = null;

    // static config = {
    //     titulo: '',
    //     texto: '',
    //     cor: '',
    //     comandoOk: null, 
    //     comandoSim: null, 
    //     comandoNao: null
    // };

    static mostrar = config => {
        this.config = config;

        const divFundo = document.createElement('div');
        divFundo.setAttribute("id", "cxmsgFundo");
        divFundo.setAttribute("class", "cxmsgFundo");

        const cxmsg = document.createElement('div');
        cxmsg.setAttribute("id", "cxmsg");
        cxmsg.setAttribute("class", "cxmsg");

        const titulo = document.createElement('div');
        titulo.setAttribute("id", "tituloCxmsg");
        titulo.setAttribute("class", "tituloCxmsg");
        titulo.setAttribute("style", `background-color: ${config.cor} !important`);

        const pTitulo = document.createElement('p');
        pTitulo.textContent = config.titulo;
        titulo.appendChild(pTitulo);

        const imgFechar = document.createElement('p');
        // imgFechar.setAttribute("src", "../imgs/close.svg");
        // imgFechar.setAttribute("alt", "Fechar janela");
        imgFechar.innerHTML = 'X';
        imgFechar.setAttribute("id", "btnFechar");
        imgFechar.setAttribute("class", "btnFecharCxmsg");
        imgFechar.addEventListener("click", () => {
            this.fechar();
        });
        titulo.appendChild(imgFechar);

        const corpo = document.createElement('div');
        corpo.setAttribute("id", "corpoCxmsg");
        corpo.setAttribute("class", "corpoCxmsg");

        const pCorpo = document.createElement('p');
        pCorpo.textContent = config.texto;
        corpo.appendChild(pCorpo);

        const rodape = document.createElement('div');
        rodape.setAttribute("id", "rodapeCxmsg");
        rodape.setAttribute("class", "rodapeCxmsg");

        if (config.tipo == 'ok') {
            const btnOk = document.createElement('button');
            btnOk.setAttribute("id", "btnOkCxmsg");
            btnOk.setAttribute("class", "btnCxmsg");
            btnOk.innerHTML = 'Ok';
            btnOk.addEventListener("click", () => {
                config.ok();
                this.fechar();
            });
            rodape.appendChild(btnOk);
        } else {
            const btnSim = document.createElement('button');
            btnSim.setAttribute("id", "btnSimCxmsg");
            btnSim.setAttribute("class", "btnCxmsg");
            btnSim.innerHTML = 'Sim';
            btnSim.addEventListener("click", () => {
                config.sim();
                this.fechar();
            });

            const btnNao = document.createElement('button');
            btnNao.setAttribute("id", "btnNaoCxmsg");
            btnNao.setAttribute("class", "btnCxmsg");
            btnNao.innerHTML = 'Não';
            btnNao.addEventListener("click", () => {
                config.nao();
                this.fechar();
            });

            rodape.appendChild(btnSim);
            rodape.appendChild(btnNao);
        }

        cxmsg.appendChild(titulo);
        cxmsg.appendChild(corpo);
        cxmsg.appendChild(rodape);

        divFundo.appendChild(cxmsg);

        document.body.prepend(divFundo);
    };

    static fechar = () => {
        document.querySelector('#cxmsgFundo').remove();
    };

};

export { Cxmsg };