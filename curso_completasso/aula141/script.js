import { Login } from "./login.js";
import { Cxmsg } from "../aula135/cxmsg.js";

const callbackOk = () => {
    const config = {
        cor: "#008000", 
        tipo: 'ok', 
        textos: null, 
        comandoSn: null
    };
    Cxmsg.mostrarCaixa(config, 'Login efetuado com sucesso!', 'É sempre um prazer ter você por aqui.');
};

const callbackNaoOk = () => {
    const config = {
        cor: "#800", 
        tipo: 'ok', 
        textos: null,
        comandoSn: null
    };
    Cxmsg.mostrarCaixa(config, 'Falha ao efetuar login.', 'Usuário ou senha inválidos.');
};

Login.login(callbackOk, callbackNaoOk);