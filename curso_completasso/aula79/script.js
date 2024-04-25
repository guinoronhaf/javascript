const div_data = document.querySelector('#div_data')
const div_relogio = document.querySelector('#div_relogio')
// const som_alarme = document.querySelector('#som_alarme')
const btn_ativar = document.querySelector('#btn_ativar')
const btn_parar = document.querySelector('#btn_parar')
const tpm_alarme = document.querySelector('#tmp_alarme')
const hora_alarme = document.querySelector('#hora_alarme')
const timer = document.querySelector('#timer')

const som_alarme = new Audio()
som_alarme.loop = -1 //tocar para sempre


let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tpm_alarme.value * 1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme) // data que quer que o alarme toque
    let alarme_hora = dt_alarme.getHours()
    alarme_hora = alarme_hora<10?'0'+alarme_hora:alarme_hora
    let alarme_minuto = dt_alarme.getMinutes()
    alarme_minuto = alarme_minuto<10?'0'+alarme_minuto:alarme_minuto
    let alarme_segundo = dt_alarme.getSeconds()
    alarme_segundo = alarme_segundo<10?'0'+alarme_segundo:alarme_segundo
    hora_alarme.innerHTML = `Hora do alarme: ${alarme_hora}:${alarme_minuto}:${alarme_segundo} </br>`
})

btn_parar.addEventListener("click", () => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = 'Hora do alarme:'
    tpm_alarme.value = 0
    timer.classList.remove('alarme')
    som_alarme.pause()
    som_alarme.currentTime = 0
})

const data = new Date()

let dia = data.getDate()
dia = dia<10?'0'+dia:dia
let mes = data.getMonth()
mes = mes<10?'0'+dia:dia
const data_r = dia+'/'+mes+'/'+data.getFullYear()

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora<10?'0'+hora:hora
    let minuto = data.getMinutes()
    minuto = minuto<10?'0'+minuto:minuto
    let segundo = data.getSeconds()
    segundo = segundo<10?'0'+segundo:segundo
    const hora_completa = hora+':'+minuto+':'+segundo
    div_relogio.innerHTML = hora_completa
    if (alarme_ativado && !alarme_tocando) {
        if (data.getTime() >= ts_alarme) {
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add('alarme')
        }
    }
}

const intervalo = setInterval(relogio, 1000)