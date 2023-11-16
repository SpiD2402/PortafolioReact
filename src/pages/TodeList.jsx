import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
export const TodeList = () => {
  const [input, setInput] = useState("");
  const [card, setCard] = useState([]);
  
  const inputValue = (e) => {
    setInput(e.target.value);
  };

  const agregar = () => {
  
    if (input.length <= 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El campo de texto no puede estar vacio",
      });
      return;
    }
    setCard([...card, input]);
    setInput("");

  };

  const eliminar = (valor) => {
    const updatedCard = card.filter((item) => item !== valor);
    setCard(updatedCard);
  };

  return (
    <div>
      <h1>Todo-List</h1>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid xs={12} sm={9} md={9} padding={1}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Escribe una Tarea"
            variant="outlined"
            onChange={inputValue}
            value={input}
          />
        </Grid>
        <Grid xs={12} sm={3} md={3} padding={1}>
          <Button
            fullWidth
            sx={{ height: "3.5rem" }}
            variant="contained"
            endIcon={<SendIcon />}
            onClick={agregar}
          >
            Agregar
          </Button>
        </Grid>
          {card.map((valor) => (
            <Grid xs={12} sm={6}  md={4} lg={4} >
              <Card  sx={{ width: "98%",marginTop:2}} >
                <CardContent sx={{ overflowWrap: "break-word"}}>
                  <p>{valor}</p>

                </CardContent>
                <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ bgcolor: "error.main" }}
                      startIcon={<DeleteIcon />}
                      onClick={()=>eliminar(valor)}
                    >
                      Eliminar
                    </Button>

                  </CardActions>
              </Card>
              
            </Grid>
          ))}
        </Grid>

    </div>
  );
};
