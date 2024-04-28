const url = document.querySelector('#url')
const btn_url = document.querySelector('#btn_url')

btn_url.addEventListener("click", (e) => {
    // window.location = 'https://www.google.com.br'
    window.location = url.value
})