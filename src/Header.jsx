import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export  function Header() {
  return (
    <header className='header'>
      <span>LOGO</span>
        <nav className='nav'>
            <ul className='lista'>
                <Link to="home" >Pokemon</Link>
                <Link to="banderas">Bandera</Link>
                <Link to="imagenes">PixaBY</Link>
            </ul>
        </nav>

    </header>
  )
}
