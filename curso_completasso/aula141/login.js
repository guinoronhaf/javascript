class Login {
    static logado = false;
    static matlogado = false;
    static nomelogado = false;
    static acessologado = false;
    static estiloCss = null;
    static endpoint = "https://fd58e49b-3397-4567-8b01-d56c56ea570d-00-1iriv13w4s6w7.picard.replit.dev/";
    // https://fd58e49b-3397-4567-8b01-d56c56ea570d-00-1iriv13w4s6w7.picard.replit.dev/?matricula=123&senha=321
    
    static login = async (mat, pas) => {
        this.endpoint += `?matricula=${mat}&senha=${pas}`;

        this.estiloCss = 
        ".fundoLogin {display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.75);box-sizing: border-box;}"+
        ".baseLogin {display: flex;justify-content: center;align-items: stretch;width: inherit;box-sizing: inherit;}"+
        ".elementosLogin {display: flex;flex-direction: column;justify-content: center;align-items: flex-start;width: 50%;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
        
        .logoLogin {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            background-color: #bbb;
            padding: 10px;
            border-radius: 0px 10px 10px 0px;
            box-sizing: inherit;
        }
        
        .campoLogin {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            box-sizing: inherit;
            margin-bottom: 10px;
        }
        
        .campoLogin label {
            font-size: 18px;
        }
        
        .campoLogin input {
            padding: 5px;
            background-color: white;
            border-radius: 5px;
        }
        
        .botoesLogin {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            box-sizing: inherit;
        }
        
        .botoesLogin button {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: #048;
            color: #fff;
            border-radius: 5px;
            padding: 10px 40px;
            width: 100px;
            box-sizing: inherit;
        }

        // await fetch(this.endpoint)
        // .then(res => res.json())
        // .then(data => {
        //     if (data) {
        //         this.logado = true;
        //         this.matlogado = mat;
        //         this.nomelogado = data.nome;
        //         this.acessologado = data.acesso;
        //     } else {
        //         console.log('Usuário não encontrado.')
        //     }
        //     console.log(data);
        // })
    }
};

export {Login};