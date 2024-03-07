//destructuring objects

const mascota = {
    nombre: 'Kevin',
    raza: 'goldfish demekin',
    clase: 'AAA'
}
// const nombreMascota = mascota.nombre
const {nombre, raza} = mascota
console.log(nombre, raza)


const web = {
    nombre: 'google',
    links:  {
        global: 'https://www.google.com/',
        pais: {
            mexico: 'https://www.google.com.mx/',
            japon: 'https://www.google.co.jp/',
            alemania: 'https://www.google.co.de/',

        }
    },
    creadores: {
        serguei: 'Serguéi Brin',
        larry: 'Larry Page'
    }
}

console.log(web.links.pais.alemania)