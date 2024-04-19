const caixa = document.querySelector('#caixa')

let musicas = new Set(['musica 1', 'musica boa', 'musica 10'])

musicas.add('musica muito legal')
musicas.add('musica 1')
musicas.add('musica 1')
musicas.add('musica 10')

console.log(musicas) // set não permite a entrada duplicada de valores.