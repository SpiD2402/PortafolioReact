import { useState } from "react"
import { PintadoImg } from "./PintadoImg";
import { TextField,Button } from "@mui/material";

export  function Inputimg() {

const [valor,setValorInput]=useState("");

const captura = (e)=>{
    e.preventDefault();
    const input = document.querySelector('input');
    setValorInput(input.value);
   
}


  return (
    <div>
        <form>
            <TextField label="Busca tu imagen" className="imp-pixar" fullWidth  />
            <Button className="btn-pixar" sx={{m:'2rem 0rem',height:'4rem'}} fullWidth  variant="contained" onClick={captura}>BUSCAR</Button>
        </form>
        <PintadoImg valor={valor} />
    </div>
  )
}
