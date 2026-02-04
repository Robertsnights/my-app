import { useState } from 'react'
import viteLogo from '/vite.svg'
import './assets/CSS/Cuerpo1.css'
import {DivText} from './creadores/zonaCreador.jsx'
export function Cue1() {

  return (
    <>
      <div className="Foto"></div>
      <div className="Listados">
        <DivText Titulo='Desarrollador de Videojuegos' Descripcion="Durante  años aprendi lo necesario para el desarrollo de videojuegos por medio de varios motores graficos."
          anio="2020-2023"/>
        <DivText  Titulo="Manifiesto"/>
        <DivText  Titulo="Tarado"/>
      </div>
    </>
  )
}


