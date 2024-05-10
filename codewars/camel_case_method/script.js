let s = 'hello case'
String.prototype.camelCase=function(){
    let result = []
    this.split(' ').forEach((word) => {
      result.push(word.replace(word[0], word[0].toUpperCase()))
    })
    return result.join('')
}

console.log(s.camelCase())