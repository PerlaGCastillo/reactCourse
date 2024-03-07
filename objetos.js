//objetos 
const mascota = {
    nombre: 'K',
    edad: 2,
    raza: ['goldfish ryukin', 'veiltail'],
    clase: 'B',
    vivo: false
}

const mascota2 = {
    nombre: 'C',
    edad: 2,
    raza: 'goldfish oranda',
    clase: 'AA',
    vivo: true
}
const mascota3 = {
    nombre: '',
    edad: 3,
    raza: 'goldfish demekin',
    clase: 'AAA',
    vivo: false
}
mascota.id = 1
mascota2.id = 2
mascota3.id = 3 


console.log(mascota)
console.log(mascota.raza[0])
console.log(mascota2.raza)
console.log(mascota3.raza)

console.log(mascota.id)