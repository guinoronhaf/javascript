class Login {
    static logado = false;
    static matlogado = false;
    static nomelogado = false;
    static acessologado = false;
    static estiloCss = null;
    static callbackOk = null;
    static callbackNaoOk = null;
    static config = {
        cor: null, //048
        img: null, //'vasco.png'
        endpoint: null, //https://fd58e49b-3397-4567-8b01-d56c56ea570d-00-1iriv13w4s6w7.picard.replit.dev
    };
    
    static login = (callbackOk, callbackNaoOk, config) => {
        this.config = config;
        this.callbackOk = () => {callbackOk()};
        this.callbackNaoOk = () => {callbackNaoOk()};
        
        this.estiloCss = 
        ".fundoLogin {display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.75);box-sizing: border-box;}"+
        ".baseLogin {display: flex;justify-content: center;align-items: stretch;width: inherit;box-sizing: inherit;}"+
        ".elementosLogin {display: flex;flex-direction: column;justify-content: center;align-items: flex-start;width: 50%;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
        ".logoLogin {display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
        ".campoLogin {display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin-bottom: 10px;}"+
        ".campoLogin label {font-size: 18px;}"+
        ".campoLogin input {padding: 5px;background-color: white;border-radius: 5px;}"+
        ".botoesLogin {display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}"+
        `.botoesLogin button {display: flex;align-items: center;justify-content: center;cursor: pointer;background-color: #${this.config.cor};color: #fff;border-radius: 5px;padding: 10px 40px;width: 100px;box-sizing: inherit;}`;

        const styleEstilo = document.createElement('style');
        styleEstilo.setAttribute('id', 'id_estiloLogin');
        styleEstilo.setAttribute('rel', 'stylesheet');
        styleEstilo.innerHTML = this.estiloCss;

        document.head.appendChild(styleEstilo);


        const corpo = document.body;

        const fundoLogin = document.createElement('div');
        fundoLogin.setAttribute('id', 'fundoLogin');
        fundoLogin.setAttribute('class', 'fundoLogin');
        corpo.prepend(fundoLogin);

        const baseLogin = document.createElement('div');
        baseLogin.setAttribute('id', 'baseLogin');
        baseLogin.setAttribute('class', 'baseLogin');
        fundoLogin.appendChild(baseLogin);

        const elementosLogin = document.createElement('div');
        elementosLogin.setAttribute('id', 'elementosLogin');
        elementosLogin.setAttribute('class', 'elementosLogin');
        baseLogin.appendChild(elementosLogin);

        const campoLoginUsername = document.createElement('div');
        campoLoginUsername.setAttribute('id', 'campoLoginUsername');
        campoLoginUsername.setAttribute('class', 'campoLogin');
        elementosLogin.appendChild(campoLoginUsername);

        const labelUsername = document.createElement('label');
        labelUsername.innerHTML = 'Username';
        campoLoginUsername.appendChild(labelUsername);

        const inputUsername = document.createElement('input');
        inputUsername.setAttribute('type', 'text');
        inputUsername.setAttribute('name', 'f_username');
        inputUsername.setAttribute('id', 'f_username');
        campoLoginUsername.appendChild(inputUsername);

        const campoLoginSenha = document.createElement('div');
        campoLoginSenha.setAttribute('id', 'campoLoginSenha');
        campoLoginSenha.setAttribute('class', 'campoLogin');
        elementosLogin.appendChild(campoLoginSenha);

        const labelSenha = document.createElement('label');
        labelSenha.innerHTML = 'Senha';
        campoLoginSenha.appendChild(labelSenha);

        const inputSenha = document.createElement('input');
        inputSenha.setAttribute('type', 'password');
        inputSenha.setAttribute('name', 'f_senha');
        inputSenha.setAttribute('id', 'f_senha');
        campoLoginSenha.appendChild(inputSenha);

        const botoesLogin = document.createElement('div');
        botoesLogin.setAttribute('id', 'botoesLogin');
        botoesLogin.setAttribute('class', 'botoesLogin');
        elementosLogin.appendChild(botoesLogin);

        const btnLogin = document.createElement('button');
        btnLogin.setAttribute('id', 'btn_login');
        btnLogin.innerHTML = 'Login';
        btnLogin.addEventListener("click", () => {
            this.verificaLogin();
        });
        botoesLogin.appendChild(btnLogin);

        const btnCancelar = document.createElement('button');
        btnCancelar.setAttribute('id', 'btn_cancelar');
        btnCancelar.innerHTML = 'Cancelar';
        btnCancelar.addEventListener("click", () => {
            this.fechar();
        });
        botoesLogin.appendChild(btnCancelar);

        const logoLogin = document.createElement('div');
        logoLogin.setAttribute('id', 'logoLogin');
        logoLogin.setAttribute('class', 'logoLogin');
        baseLogin.appendChild(logoLogin);

        const imgLogin = document.createElement('img');
        imgLogin.setAttribute('src', this.config.img);
        imgLogin.setAttribute('title', 'Vasco da Gama');
        logoLogin.appendChild(imgLogin);

        // o benefício de adicionar estilo dessa maneira reside principalmente no fato de não depender de algum arquivo .css externo.

    };
    
    static verificaLogin = () => {
        const mat = document.querySelector('#f_username').value;
        const pas = document.querySelector('#f_senha').value;
        
        const endpoint = `${this.config.endpoint}/?matricula=${mat}&senha=${pas}`;
        
        fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            if (data) {
                sessionStorage.setItem('logado', 'true');
                sessionStorage.setItem('matLogado', mat);
                sessionStorage.setItem('nomeLogado', data.nome);
                sessionStorage.setItem('acessoLogado', data.acesso);
                this.callbackOk();
                this.fechar();
            } else {
                sessionStorage.setItem('logado', 'false');
                sessionStorage.setItem('matLogado', '');
                sessionStorage.setItem('nomeLogado', '');
                sessionStorage.setItem('acessoLogado', '');
                this.callbackNaoOk();
            };
        });
    };

    static fechar = () => {
        const fundoLogin = document.querySelector('#fundoLogin');
        fundoLogin.remove();

        const id_estiloLogin = document.querySelector('#id_estiloLogin');
        id_estiloLogin.remove();
    };
};

/* EXEMPLO DE API */
// API deverá retornar nome e acesso caso login seja efetuado com sucesso
// API deverá retornar null caso login não seja efetuado

// var http = require('http');
// var url = require('url');
// http.createServer(function(req, res) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.writeHead(200, {'Content-Type': 'application/json'});

//   let parametros = url.parse(req.url, true);

//   let mat = parametros.query.matricula;
//   let pas = parametros.query.senha;

//   let dados = null;

//   if (mat == "123" && pas == "321") {
//     dados = {
//       nome: "Vasco", 
//       acesso: 10
//     }
//   }

//   res.end(JSON.stringify(dados));
// }).listen(8080);

// Exemplo de chamada:
// https://loginvv1.guilhermenoron3.repl.co/?matricula=123&senha=321