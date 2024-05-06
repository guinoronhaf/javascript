const cursos = ['js', 'html', 'css', 'arduino', 'raspberry', 'c++', 'python', 'java', 'c#']

const getTodosCursos = () => {
    return cursos
}

function getCurso(i_curso) {
    return cursos[i_curso]
}

export {cursos, getCurso}
export default getTodosCursos

// export default function getTodosCursos() {
//     return cursos
// }