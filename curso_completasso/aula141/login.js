class Login {
    static logado = false;
    static matlogado = false;
    static nomelogado = false;
    static acessologado = false;
    static endpoint = "https://fd58e49b-3397-4567-8b01-d56c56ea570d-00-1iriv13w4s6w7.picard.replit.dev/";
    // https://fd58e49b-3397-4567-8b01-d56c56ea570d-00-1iriv13w4s6w7.picard.replit.dev/?matricula=123&senha=321
    
    static login = async (mat, pas) => {
        this.endpoint += `?matricula=${mat}&senha=${pas}`;
        await fetch(this.endpoint)
        .then(res => res.json())
        .then(data => {
            if (data) {
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = data.nome;
                this.acessologado = data.acesso;
            } else {
                console.log('Usuário não encontrado.')
            }
            console.log(data);
        })
    }
};

export {Login};