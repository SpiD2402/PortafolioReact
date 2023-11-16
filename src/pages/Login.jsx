import { Grid,TextField,Card,CardContent,Button } from "@mui/material"
import { UserContext } from "../Context/UserContext"
import { useContext, useState } from "react"




export  function Login() {
  const {user,storeUser}=useContext(UserContext);
  const {eliminarLocal}=useContext(UserContext);
  const [userData,setUserData] = useState({

    email:"",
    password:"",

  })

  const handleInput=(e)=>{
    const {name,value} = e.target;
      setUserData({
        ...userData,
        [name]:value,

      })

  }

  const handleClickLogin=(e)=>{
    
    if (userData.email =="pepe@gmail.com" && userData.password ==="12345678"){
      const user ={
      nombre:"pepe",
      apellido:"zapata",
      edad:20
    }
   
    storeUser(user);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'usuario valido ya puedes ingresar a los demas proyectos ',
      showConfirmButton: false,
      timer: 1500
    })
    
  }
  else{
    Swal.fire(
      {
        icon:"error",
        title:"Error",
        text:"usuario invalido "
      }
    )
   
  } 

  }
  return (
      <Grid
        className="login"
        container
        alignItems="center"
        justifyContent="space-around"
        textAlign={"center"}

      >
        <Grid item xs  md={6} sm={12} height={"22.4rem"} >

          <img
            src="https://assets.website-files.com/62f68a467640278e48191c75/636c76819d8af34e9824b573_FULLSTACK%20ELEARNING-p-500.jpg"
              className="imagen-login"
            alt=""
            width={"100%"}
            height={"100%"}
          
          />
        </Grid>
        <Grid item xs={12}  sm={12} md={6}  className="formulario">
          <Card >
            <CardContent className="content" >
              <h5>Bienvenidos</h5>
              <p>A mi portafolio de proyectos</p>
        

              <Grid container  mt={5}>
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  onChange={handleInput}
                
                />
              </Grid>
                <Grid item md={12} mt={5}>
                  <TextField
                    label="Password"
                    fullWidth
                    name="password"
                    type="password"
                    onChange={handleInput}

                      
                  />
                </Grid>
              <Grid item md={12} mt={3}>
                <Button
                  sx={{ backGroundColor: "#000",mx:2 } }
       
                  variant="contained"
                  
                  size="large"
                  onClick={handleClickLogin}
                  
                >
                  Inicia Sesion
                </Button>

                <Button 
                  sx={{ backGroundColor: "#000" }}
                  variant="contained"
             
                  size="large"
                  onClick={eliminarLocal}
                >
                  Cerrar Sesion
                </Button>
              </Grid>


            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )

}

