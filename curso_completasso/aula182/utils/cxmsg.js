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
        divFundo.setAttribute("class", "cxmsgFundo ocultarPopup");

        const cxmsg = document.createElement('div');
        cxmsg.setAttribute("id", "cxmsg");
        cxmsg.setAttribute("class", "cxmsg");

        const titulo = document.createElement('div');
        titulo.setAttribute("id", "tituloCxmsg");
        titulo.setAttribute("class", "tituloCxmsg");

        const pTitulo = document.createElement('p');
        p.textContent = 'Título';
        titulo.appendChild(pTitulo);

        const imgFechar = document.createElement('img');
        imgFechar.setAttribute("src", "../imgs/close.svg");
        imgFechar.setAttribute("alt")

        alert(config.texto);
    };

};

export { Cxmsg };


<div id="cxmsgFundo" class="cxmsgFundo ocultarPopup">
        <div id="cxmsg" class="cxmsg">
            <div id="tituloCxmsg" class="tituloCxmsg">
                <p>Título</p>
                <img src="../imgs/close.svg" alt="Fechar caixa de texto" id="btnFechar" class="btnFecharCxmsg">
            </div>
            <div id="corpoCxmsg" class="corpoCxmsg">
                <p>Mensagem</p>
            </div>
            <div id="rodapeCxmsg" class="rodapeCxmsg">
                <button id="btnOkCxmsg" class="btnCxmsg">Ok</button>
                <button id="btnSimCxmsg" class="btnCxmsg">Sim</button>
                <button id="btnNaoCxmsg" class="btnCxmsg">Não</button>
            </div>
        </div>
</div>
