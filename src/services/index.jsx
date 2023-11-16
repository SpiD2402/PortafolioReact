const BASE_URL ="https://pokeapi.co/api/v2/pokemon?limit=100"

export const  getDataPoke= async(url=BASE_URL)=>{
try{
    const response= await fetch(url)
    const data = await response.json()
    //const data = await response.json()
    return data
}
   catch (error){
    console.log(error)
   }
}

const color ={
    red: "rgba(255, 48, 50, 0.7)",
    green: "rgba(83, 180, 50, 0.7)",
    blue: "rgba(113, 104, 226, 0.7)",
    brown: "rgba(113, 104, 226, 0.7)",
    purple: "rgba(113, 104, 226, 0.7)",
    pink: "rgba(255, 48, 50, 0.7)",
    yellow: "rgba(229, 216, 0, 0.6)",
  };
/*export const getColorPokemon = async (id) =>{

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    const data = await response.json();
    //el propblema del api es que nos da colores que no son tan boinitos 
    //para pdoer crea o utilizar un color alternativio
    //creamo un diccioanario de color conde el key ser el color base 
    // si data.color.name = red
    // va buscar dentro del objeto el color por key 
    //conel key es rojo nos retornara el rgba 

    return color [data.color.name];

  }*/

/*export const getDataFromPokemon = async()=>{
    const  newPokemones = await getDataPoke()
    const  imagesLink= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
    const datos = newPokemones.results.map( (poke,cod) =>(
        {
            nombre:poke.name,
            images:`${imagesLink}${cod+1}.svg`,
            id:cod+1
        }
    ))
    await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        },1000);
      });
    return datos;
    
}*/

