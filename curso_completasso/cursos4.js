class Cursos {
    static cursos = ['js', 'html', 'css', 'arduino', 'raspberry', 'c++', 'python', 'java', 'c#']

    constructor() {}

    static getTodosCursos = () => {
        return this.cursos
    }

    static getCurso = (i_curso) => {
        return this.curso[i_curso]
    }

    static addCurso = (novoCurso) => {
        this.cursos.push(novoCurso)
    }

    static apagarCursos = () => {
        this.cursos = []
    }
}

export default Cursos 