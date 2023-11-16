
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/pokemon'
import Private from '../private'
import { Flags } from '../pages/Flags'
import { PrincipalImg } from '../imagenes-pixabay/Principal'
import { Login } from '../pages/Login'
import Headerr from '../Components/Headerr'
import { TodeList } from '../pages/TodeList'
import { RickAndMorty } from '../pages/RickAndMorty'
import FlagDetail from '../Components/FlagDetail'

export  function Router() {
  return (
    <BrowserRouter>
    <Headerr/>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/banderas' element={<Flags/>}/>
        <Route path='/banderas/detail/:name' element={<FlagDetail/>}/>
        {/*Rutas Privadas*/}
        {/*Debes ingresar correo y contraseña para ingresar a estos
        componentes */}

        <Route element={<Private/>}>
        <Route path='/imagenes' element={<PrincipalImg/>}/>
        <Route path='/pokemon' element={<Home/>}/>
        
        <Route path='/todelist' element={<TodeList/>}/>
        <Route path='/morty' element={<RickAndMorty/>}/>
        </Route>
    </Routes>

    </BrowserRouter>
  )
}
