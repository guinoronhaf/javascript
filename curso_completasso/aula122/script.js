const p_temp = document.querySelector('#p_temp')
const p_nivel = document.querySelector('#p_nivel')
const p_pressao = document.querySelector('#p_pressao')
const btn_texto = document.querySelector('#btn_texto')

const obterDados = () => {
    const endpoint = 'https://8a9c6822-f4bb-42b2-8dc8-7f388bc16650-00-1kbn2ccmkk6w4.spock.replit.dev/';
    fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
        p_temp.innerHTML = `Tempetaura: ${dados.temperatura} °C`
        p_nivel.innerHTML = `Nível: ${dados.nivel} m`
        p_pressao.innerHTML = `Pressão: ${dados.pressao} atm`
    })   
}

// btn_texto.addEventListener("click", () => {
//     obterDados()
// })

let dados = {
    nome: 'Guilherme', 
    clube: 'Vasco', 
    curso: 'js'
}

let cabecalho = {
    method: "POST", 
    body:JSON.stringify(dados)
}

const gravarDados = () => {
    const endpoint = 'https://8a9c6822-f4bb-42b2-8dc8-7f388bc16650-00-1kbn2ccmkk6w4.spock.replit.dev/'
    fetch(endpoint, cabecalho)
    .then(res => res.json())
    .then(ret => {
        console.log(ret)
    })
}