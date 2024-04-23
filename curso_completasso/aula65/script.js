const pessoa =  {
    nome: 'Vasco',
    canal: 'CFB Cursos', 
    curso: 'JavaScipt', 
    aulas: {
        aula01: 'Introdução', 
        aula02: 'Variáveis', 
        aula03: 'Condicional'
    }
}

const string_pessoa = '{"nome":"Vasco","canal":"CFB Cursos","curso":"JavaScipt","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}' // aspas pois se trata de uma "string JSON"

const s_json_pessoa = JSON.stringify(pessoa)
const o_json_pessoa = JSON.parse(string_pessoa)

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)