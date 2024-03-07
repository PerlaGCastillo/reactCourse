// var  
//debilidad: se puede sobrescribir 
var edadV = 1
var edadV = 10
console.log(edadV)

// let
// let no permite declarar dos veces una variable pero si actualizar sus parámetros
let edadL = 50
edadL = 20
console.log(edadL)

// const 
// np va a cambiar con el tiempo 
const edadC = 30
console.log(edadC)

//var 
//se modifica el valor si entra  a la condicional pero incluso afuera lo cambia
var edad0 = 50
if(true){
    var edad0 = 40
    console.log(edad0)
}
console.log(edad0)

//let 
//se modifica el valor si entra  a la condicional, pero permanece la primera asignación 
let edad1 = 45
if(true){
    let edad1 = 50
    console.log(edad1)
}
console.log(edad1)

//const
//viven dentro del scope y se pueden modificar dentro
//no se puede sobrescribir la constante

const edad2 = 55
if(true){
    const edad2 = 60
    console.log(edad2)
}
console.log(edad2)

//no hacer
var arrayNum = [0,9,8,7]
var arrayNum = [0,9,8,7,6,5]
console.log(arrayNum)

let arrayNm = [0,1,2]
arrayNm = [0,1,2,3]
console.log(arrayNm)

// objeto o array con funciones permite realizar modificaciones
const arrayNume = [8,7,6]
arrayNume.push(5)
console.log(arrayNum)

const persona = {
    nombre: 'C',
    edad: 28
}
persona.edad = 29
persona.pais = 'Alemania'
console.log(persona)


//var no se utiliza, ha sido reemplazado por let
//let y const tienen casi las mismas pripiedades
//const no puede cambiar su valor a menos que sea un objeto o array que se esta moficcando
