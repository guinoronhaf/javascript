const btn_alert = document.querySelector('#btn_alert')
const btn_confirm = document.querySelector('#btn_confirm')
const btn_prompt = document.querySelector('#btn_prompt')

btn_alert.addEventListener("click", () => {
    alert('Olá, como você está?')
})


btn_confirm.addEventListener("click", () => {
    confirm('Você está aprendendo?') // se apertar "ok", retorna 'true'; se não, retorna 'false'
})


btn_prompt.addEventListener("click", () => {
    prompt('De 0 a 10, o quão bem você está aprendendo?', 'Digite aqui')
})