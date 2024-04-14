let pessoa = {
    nome: 'Matheus', 
    idade: 29, 
    falar: function() {
        console.log('Olá, tudo bem?');
    }, 
    dizerNome: function() {
        console.log(`Olá! Meu nome é ${this.nome}.`) //sendo assim, o this refere-se à instância do objeto "pessoa"
    }, 
    aniversario: function() {
        this.idade += 1
    }
}

pessoa.dizerNome();

pessoa.aniversario(); //chamei o método; aqui ele já acrescentou 1 na idade

console.log(pessoa.idade) //30 --> 29 + 1