import React, { useEffect, useState } from 'react'
import { Button,Dialog,DialogContent,Grid,Slider,Chip} from '@mui/material'
import {  getDataPoke } from '../services'
export const  PokemonDetail =(props)=> {

const [abrir,setAbrir]= useState();
const [pokemonData,setPokemonData] = useState({})

const fetchDetailFromPokemon = async ()=>{
     const pokemon = await getDataPoke(props.url);
    setPokemonData(pokemon)

}


const handleOpenDialog= async ()=>{
    //cuando se abre el modal abrir  --sera true

    if(!abrir){
        await fetchDetailFromPokemon();
    }

    setAbrir(!abrir)

}

return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained">
        ver detalle
      </Button>
      <Dialog
        open={abrir}
        onClose={handleOpenDialog}
        
        maxWidth={"md"}
      >
        <DialogContent>
          {Object.keys(pokemonData).length > 0 && (
            <div>
              <h2  className="name-pokemon text-center">{props.apodo}</h2>
              <Grid container sx={{justifyContent:"center"}} >
                <Grid item md={6}>
                  <h4>Habilidades</h4>
                 {pokemonData.abilities.map((abilitie)=>(
                    <Chip label={abilitie.ability.name} color="primary" sx={{marginRight:2 ,marginBottom:1 }} />
                 ))}
                 <h4>Datos</h4>
                 {pokemonData.types.map((type)=>(
                        <Chip 
                        label={type.type.name}
                        color={"warning"}
                        sx={{marginRight:2 ,marginBottom:1 ,marginTop:1 }}
                        
                        />
                 ))}

                    <Chip color='success' sx={{marginRight:2 ,marginBottom:1 ,marginTop:1}} label={`${pokemonData.weight}kg`}/>
                    <Chip color='success' sx={{marginRight:2 ,marginBottom:1 ,marginTop:1}} label={`${pokemonData.height}hg`}/>
               
                <h4>Puntos  Base</h4>
                   {pokemonData.stats.map((stat)=>(

                    <div>
                        <h5 className="text-primary">{stat.stat.name}</h5>
                        <Slider
                        
                        defaultValue={+stat.base_stat}
                        
                        arial-label="Always visible"
                        valueLabelDisplay ="on"  
                        disabled
                        />
                    </div>

                   ))} 

                </Grid>

                <Grid item md={6} width={300}>
                        
                        <img width={"100%"} src={pokemonData.sprites.other["official-artwork"].front_default} alt="" />
                </Grid>
              </Grid>
            </div>
          )}

          <Button variant="contained" sx={{ margin: "auto", display: "block", width: "50%" }}   onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
