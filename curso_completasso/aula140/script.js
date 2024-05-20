const tmp = document.querySelector('#tmp');
const nvl = document.querySelector('#nvl');
const prs = document.querySelector('#prs');

let dados = {
    _temperatura: 0,
    _nivel: 0, 
    _pressao: 0, 
    set valores(val) {
        this._temperatura = val.temperatura;
        this._nivel = val.nivel;
        this._pressao = val.pressao;
        tmp.innerHTML = this._temperatura;
        nvl.innerHTML = this._nivel;
        prs.innerHTML = this._pressao;
    }, 
    get valores() {
        return [this.temperatura, this.nivel, this.pressao];
    }
};

const buscarDados = async () => {
    
    const endpoint = "https://8a9c6822-f4bb-42b2-8dc8-7f388bc16650-00-1kbn2ccmkk6w4.spock.replit.dev/";

    await fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        // dados._temperatura = data.temperatura;
        // dados._nivel = data.nivel;
        // dados._pressao = data.pressao;
        dados.valores = data;
    });

};

let intervalo = setInterval(buscarDados, 1000);

console.log(dados.valores);