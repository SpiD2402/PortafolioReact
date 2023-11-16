import { useEffect, useState } from "react";
import "./styles.css";
import {  getDataPoke } from "../services";
import { CircularProgress,Grid,Card,CardContent,CardMedia, Container} from "@mui/material";
import { PokemonDetail } from "../Components/PokemonDetail";


export function Home() {
  const [pokemon, setPokemon] = useState([]);
  const imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

  const fetchPokemonList = async () => {
    const listPokemones = await getDataPoke();
    setPokemon(listPokemones.results);
  };

  useEffect(() => {
    fetchPokemonList();
  },[]);

  return (
   <Container>
      <h1>Pokemones</h1>

      {pokemon.length === 0 ? (
        <CircularProgress /> // Muestra la animación de carga mientras se cargan los pokemones
      ) : (
        <Grid spacing={2} container>
          {pokemon.map((pk, index) => (
            <Grid item xs={12} md={4} lg={4} sm={6} key={index}>
              <Card className="card-pokemon" sx={{bgcolor:""}}>
                <CardMedia component="img" className="img-pokemon" image={`${imgUrl}${index + 1}.svg`} />
                <CardContent>
                  <h3>{pk.name}</h3>
                  <PokemonDetail apodo={pk.name} url={pk.url} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
