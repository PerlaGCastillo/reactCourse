//filter 
// crea un nuevo array con todos los elementos que cumplan una condiciòn

  const obtenerPokemones = async() => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await res.json()
        const arrayN = data.results.filter(poke => poke.name !== 'bulbasaur')
        console.log(arrayN)
    } catch (error) {
        console.log(error)
    }
  }
  obtenerPokemones()