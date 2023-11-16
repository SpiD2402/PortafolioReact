import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Chip,

} from "@mui/material";

import React, { useEffect, useState } from "react";


export const RickAndMorty = () => {
  const [apirick, setApirick] = useState([]);
  const getApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const data = await api.json();
    setApirick(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Container>
      <Grid container>
        {apirick.map((rick) => (
          <Grid xs={12} sm={12} md={6} lg={6} >
            <Card sx={{display:"flex",backgroundColor:"rgb(60, 62, 68)",color:"white",height:"95%",width:"98%"}}>
              <CardMedia
               sx={{width:200}}
                component="img"
                height={"100%"}
                
                image={rick.image}
              />
              <CardContent sx={{textAlign:"left",height:"100%",justifyContent:"center"}}>
              <h3>{rick.name}</h3>
              <Chip color='success' label={rick.species} sx={{margin:0.5}}></Chip>
          <Chip color='success' label={rick.status} sx={{margin:0.5}}></Chip>
          <h5>last known location</h5>
          <Chip color='warning' label={rick.location.name} ></Chip>
        
            </CardContent>
          
            </Card>


          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
