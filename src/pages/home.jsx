import React from 'react'
import { Navigate } from 'react-router-dom'
import '../styles/home.css'

const home = () => {
  return (
    <div>
        <header class="banner">
         <nav className='menu-container'>
                <ul class="banner-ul">
                    <li>Mensajes</li>
                    <li>Configuracion</li>
                    <li>Usuario</li>
                    <li><img src="./logoCliente.png" alt="" /></li>
                </ul>
        </nav>
        </header>
        <aside class="menu"></aside>
    </div>
  )
}

export default home
