//setTimeout e setInterval

//parando setTimeout

var timer = setTimeout(function() {
    console.log('oi')
}, 1500)

clearTimeout(timer)

//parando o setInterval

var myInterval = setInterval(function() {
    console.log('imprimindo interval')
}, 500)

setTimeout(function() {
    console.log('limpado Interval')
    clearInterval(myInterval)
}, 1500)