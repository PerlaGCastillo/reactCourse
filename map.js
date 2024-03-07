//map
// método_  crea un nuevo array con los resultados de la llamada a la función iniciada aplicados a cada uno de sus elementos 

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    let arrayNombres = [] 
    data.results.forEach((element) => {
        arrayNombres.push(element.name)
    })
    console.log(arrayNombres)
  })
  .catch((error) => console.log(error))



  
  const obtenerPokemones = async() => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await res.json()
        const arrayN = data.results.map(poke => poke.name)
        console.log(arrayN)
    } catch (error) {
        console.log(error)
    }
  }
  obtenerPokemones()