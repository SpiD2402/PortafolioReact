import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Private =()=>{
    const userD = localStorage.getItem('user');
    const {user}= useContext(UserContext)
    if (!user || !userD){
        return <Navigate to="/" />
    }

    return <Outlet/>

}

export default Private ;