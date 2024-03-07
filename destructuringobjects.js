//destructuring objects

const mascota = {
    nombre: 'Kevin',
    raza: 'goldfish demekin',
    clase: 'AAA'
}
// const nombreMascota = mascota.nombre

const {nombre, raza} = mascota
console.log(nombre, raza)