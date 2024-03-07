//tempate string

//antes, aúnj utilizado
const numero = (num) => {
    return 'el número es : ' + num 
}
const resultado = numero(10)
console.log(resultado)


// `concatenar`
const numero1 = (num1, num2) => (`el número es:  ${num1 + num2}`)
const resultado1 = numero1(10,10)
console.log(resultado1)