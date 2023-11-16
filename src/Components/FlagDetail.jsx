import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDataPoke } from '../services';
import { Container,Button, Grid } from '@mui/material';

export default function FlagDetail() {

        const {name} = useParams();
        const history = useNavigate();
        const [country,setCountry] = useState([]);

    
        const fetchCountry = async()=>{
            const response = await getDataPoke( `https://restcountries.com/v3.1/name/${name}`)
            setCountry(response[0])
            console.log(response)
            console.log(response[0])
        }

        useEffect(()=>{
            fetchCountry();

        },[name]);

  return (
    <Container>
      <Button  className='mb-4'  variant="outlined" onClick={()=> history(-1)}>
            Back/Volver
      </Button>
      {Object.keys(country).length>0 &&(

            <Grid container alignItems="center" flexDirection={'column'} spacing={3} sx={{height:"100vh"}}>

                    <Grid item md={6} >
                   
                    <img src={country?.flags?.svg} width={"100%"} style={{ maxWidth: "400px", height: "auto"}} />
                            
                    </Grid>
                    <Grid item md={6} >
            
                    <h1>{country?.name?.common}</h1>
                    <div>{Object.keys(country.currencies).map(valor =>(
                          <div>
                            <h2>Moneda</h2>
                            <h3>{Object.keys(country.currencies)}</h3>
                          <h3>{country.currencies[valor].name}</h3>
                          <h3>Símbolo: {country.currencies[valor].symbol}</h3>
                          </div>
                      
                    ))}</div>
                    
                    </Grid>

            </Grid>


      )}
    </Container>
  )
}
