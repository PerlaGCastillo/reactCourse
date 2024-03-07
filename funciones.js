//funciones
// function nombre (paramétros){}
function suma(num){
    console.log(num)
}
suma(10)


//funciones de flecha
// reducir código, declarar un paramétro, recibirlo y pintarlo 
const sumar = (n) => 
    console.log(n)
sumar(20)

//sólo un parámetro no necesito ponerlo entre paréntesis
const sum = n => {
    console.log(n)}
sum(30)



// >=2 parámetros con paréntesis
const smr = (n1, n2) => {
    return(n1+n2)}
//guardar en una constante y regresar resultado
const res = smr(30,10)
console.log(res)


// reducir 
const smar = (n1, n2) =>  (n1+n2)
const rs = smar(30,20)
console.log(rs)


//
const mensaje = () =>{
    return 'hola soy P'
}
const men = mensaje()
console.log(men)


// retorna todo lo de la derecha (puede ir en paréntesis)
const msj = nombre => 'hola yo soy ' + nombre
const resul = msj('B')
console.log(resul)


// si no introduces otro n se inicia en 0 y a eso le suma 3
const tres = (numero = 0) =>{
    console.log(numero + 3)
}
tres(9)