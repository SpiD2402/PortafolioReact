
import { useEffect, useState } from "react"
import { getDataPoke } from "../services"
import { Card,CardContent,CardMedia,Container,Grid,TextField,FormControl,InputLabel,Select,MenuItem,CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
export  function Flags() {

    const [countries,setCountries]=useState([]);
    const [region,setRegion]=useState("");
    const [originalCountries, setOriginalCountries] = useState([]);
    const fetchCountries = async()=>{
        const response = await getDataPoke(`https://restcountries.com/v3.1/all`)
        
        setCountries(response)
        setOriginalCountries(response)
    }

const handleRegion = async(e)=>{
    setRegion(e.target.value)
        if (e.target.value === "all"){
            fetchCountries()
            return
        }
        setCountries([]);
      
        const response = await getDataPoke(`https://restcountries.com/v3.1/region/${e.target.value}`)  
        setCountries(response)

    }
//primero debemos limpiar para poder volver a llenar los imput

const handleSearchCountry =(e)=>{

    const countryName=e.target.value;
    if(countryName.length ===0){
      //setCountries(originalCountries)
       fetchCountries()
  }

   if (countryName.length >1){
        const filterCountries =originalCountries.filter(country =>
            country.name.official.toUpperCase().includes(countryName.toUpperCase()))
            setCountries(filterCountries)
    }


    /*if (countryName.length >1){
        const filterCountries =countries.filter(country =>
            country.name.official.toUpperCase().includes(countryName.toUpperCase()))
            setCountries(filterCountries)
    }
    */
}


    useEffect(()=>{
        fetchCountries()
    },[])
    


  return (
    <Container>
        <h1>banderas</h1>
        <Grid container spacing ={3}>
            <Grid item md={6} sm={12} xs={12}>
                <TextField label="Busca tu pais" onChange={handleSearchCountry} fullWidth/>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
                <FormControl fullWidth >
                    <InputLabel >Filtra tu continente</InputLabel>
                    <Select label="filtra tu continente" value={region} onChange={handleRegion} >
                        <MenuItem value ="all">Todos los continentes</MenuItem>
                        <MenuItem value ="Africa">Africa</MenuItem>
                        <MenuItem value ="Americas">Americas</MenuItem>
                        <MenuItem value ="Europe">Europe</MenuItem>
                        <MenuItem value ="Oceania">Oceania</MenuItem>
                        <MenuItem value ="Asia">Asia</MenuItem>
                    </Select>
                </FormControl>                  
            </Grid>
            {countries.length > 0 ? (
          countries.map((country) => (
            <Grid key={country.name.common} item   xs={12}  sm={6} md={4}  lg={3} > 
                <Link to={`/banderas/detail/${country.name.common}`} >
                <Card >
                  <CardMedia 
                    component="img"
                    height={200}
                    image={country.flags.svg}
                  />
                  <CardContent>
                    <h4>{country.name.common}</h4>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
         </CardContent>
                </Card>
                </Link>
            </Grid>
          ))
        ) : (
          <div className="center loading pj">
            <CircularProgress />
            <h4>Cargando...</h4>
          </div>



        )}
        </Grid>
        
    </Container>
  )


}

