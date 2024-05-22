import { Cxmsg } from "../aula135/cxmsg.js";

const callbackOk = () => {
    const config = {
        cor: "#008000", 
        tipo: 'ok', 
        textos: null, 
        comandoSn: () => {}
    };
    Cxmsg.mostrarCaixa(config, 'Login efetuado com sucesso!', 'É sempre um prazer ter você por aqui.');
};

const callbackNaoOk = () => {
    const config = {
        cor: "#800", 
        tipo: 'ok', 
        textos: null,
        comandoSn: () => {}
    };
    Cxmsg.mostrarCaixa(config, 'Falha ao efetuar login.', 'Usuário ou senha inválidos.');
};

const configLogin = {
    cor: "048", 
    img: "vasco.png", 
    endpoint: "https://fd58e49b-3397-4567-8b01-d56c56ea570d-00-1iriv13w4s6w7.picard.replit.dev"
};

Login.login(callbackOk, callbackNaoOk, configLogin); //agora, pode-se utilizar os recurso de "login.js" normalmente; a única diferença é que agora os comandos desse arquivo estão num servidor online, podendo ser distribuídos tranquilamente (CDN)..