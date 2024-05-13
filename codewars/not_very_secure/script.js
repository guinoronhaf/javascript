function alphanumeric(string) {
    const regex = /^[a-z\d]+$/i // o +$ indica que retornará tudo que não seja corresponde ao que está dentro dos colchetes.
    return regex.test(string)
}

console.log(alphanumeric('hello world_'))