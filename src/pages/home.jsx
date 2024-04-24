import React from 'react'
import { Navigate } from 'react-router-dom'
import './home.css'

const home = () => {
  return (
    <div>
        <header class="banner">
        <ul>
            <li>Mensajes</li>
            <li>Configuracion</li>
            <li>Usuario</li>
        </ul>
        </header>
        <aside class="menu"></aside>
    </div>
  )
}

export default home
