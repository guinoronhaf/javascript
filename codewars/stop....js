//MÉTODOS PARA STRINGS:

//1 - charAt()
//console.log('vasco'.charAt(3)) --> "c"

//2 - indexOf()

//3 - toUpperCase(); toLowerCase()

//4 - substr()
//let frase = 'eu sou Vasco'
//console.log(frase.substr(0, 1)) --> "eu"

//5 - slice()
//mesma coisa do substr()

//6 - replace()

//7 - concat()

//8 - split()
//let linguagens = 'js;php;python'
//let array_ling = linguagens.split(';')
//console.log(array_ling) --> ['js', 'php', 'pyhton']

//9 - trim()
//remove os espaços em branco no começo ou no fim de uma string

//10 - join()
//junta os elementos do array

function reverse(s) {
    var new_string = ''
    for (let i = s.length - 1; i >= 0; i--) {
        new_string += s[i]
    }
    return new_string
}


function spinWords(string) {
    let array_strings = string.split(' ')
    let result = []
    for (element of array_strings) {
        if (element.length < 5) {
            result.push(element)
        } else {
            result.push(reverse(element))
        }
    }
    return result.join(' ')
}


console.log(spinWords('Just kidding there is still one more'))
