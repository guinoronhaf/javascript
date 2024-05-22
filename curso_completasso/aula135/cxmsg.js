class Cxmsg {
    static cor = '#888';
    static destino = null;
    static divMsg = null;
    static tipo = null;
    static comandoSn = null;
    static textos = []

    static mostrarCaixa = (config, titulo, texto) => {
        this.destino = document.body;
        this.cor = config.cor;
        this.tipo = config.tipo;
        this.textos = config.textos;
        this.comandoSn = config.comandoSn;
        this.titulo = titulo;
        this.texto = texto;
        this.divMsg = document.createElement('div');
        const estiloDivMsg = 
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0, 0, 0, 0.7);"+
            "z-index: 9999999999999";
        this.divMsg.setAttribute('id', 'divMsg');
        this.divMsg.setAttribute('style', estiloDivMsg);
        this.destino.prepend(this.divMsg);

        const areaCxMsg = document.createElement('div');
        const estiloCxMsg = 
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;";
        areaCxMsg.setAttribute('style', estiloCxMsg);
        this.divMsg.appendChild(areaCxMsg);

        const estiloTituloCxMsg = 
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: "+this.cor+";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;";
        const tituloCxMsg = document.createElement('div');
        tituloCxMsg.setAttribute('style', estiloTituloCxMsg);
        tituloCxMsg.innerHTML = this.titulo;
        areaCxMsg.appendChild(tituloCxMsg);

        const estiloCorpoCxMsg = 
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px;";
        const corpoCxMsg = document.createElement('div');
        corpoCxMsg.setAttribute('style', estiloCorpoCxMsg);
        corpoCxMsg.innerHTML = this.texto;
        areaCxMsg.appendChild(corpoCxMsg);

        const estiloRodapeCxMsg = 
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;";
        const rodapeCxMsg = document.createElement('div');
        rodapeCxMsg.setAttribute('style', estiloRodapeCxMsg);
        areaCxMsg.appendChild(rodapeCxMsg);

        const estiloBtn = 
            "background-color: "+this.cor+";"+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border-radius: 5px;"+
            "cursor: pointer;"+
            "text-transform: uppercase;"
        if (this.tipo == "ok") {
            const btnOk = document.createElement('button');
            btnOk.setAttribute('style', estiloBtn);
            btnOk.innerHTML = 'OK';
            btnOk.addEventListener("click", () => {
                this.ocultarCaixa();
                this.comandoSn();
            });
            rodapeCxMsg.appendChild(btnOk);
        } else if (this.tipo == "sn") {
            const btnSim = document.createElement('button');
            btnSim.setAttribute('style', estiloBtn);
            btnSim.innerHTML = this.textos[0];
            rodapeCxMsg.appendChild(btnSim);
            btnSim.addEventListener("click", () => {
                this.comandoSn();
                this.ocultarCaixa();
            });

            const btnNao = document.createElement('button');
            btnNao.setAttribute('style', estiloBtn);
            btnNao.innerHTML = this.textos[1];
            btnNao.addEventListener("click", () => {
                this.ocultarCaixa();
            });
            rodapeCxMsg.appendChild(btnNao);
        }
    };

    static ocultarCaixa = () => {
        this.divMsg.remove();
    };
}

export {Cxmsg};