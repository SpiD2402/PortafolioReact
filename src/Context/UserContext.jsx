import { createContext, useState } from "react";

export const UserContext = createContext()



export const UserProvider = ({children})=>{

    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")))

    const storeUser = (dataUser)=>{

        localStorage.setItem("user", JSON.stringify(dataUser))
        setUser(dataUser)
    }

    const eliminarLocal=()=>{
        localStorage.removeItem("user")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Cerraste sesion ya no puedes ingresar a los proyectos',

          })
    }

    return (

        <UserContext.Provider value ={{user,storeUser,eliminarLocal}}>
            {children}
        </UserContext.Provider>

    )
}