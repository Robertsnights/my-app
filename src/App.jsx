import { useState } from 'react'
import viteLogo from '/vite.svg'
import './assets/CSS/Cuerpo1.css'
import {DivText} from './creadores/zonaCreador.jsx'
import  {Volver} from './creadores/zonaCreador.jsx'
export function Cue1() {
  return (
    <>
      <div className="Foto"></div>
      <div className="Listados">
        <DivText Titulo='Desarrollador de Videojuegos' 
          Descripcion="Durante  años aprendi lo necesario para el desarrollo de videojuegos por medio de varios motores graficos."
          anio="2020-2023"/>
        <DivText  Titulo="Diplomatura Web con PHP"
          Descripcion="Aprendi en durante los 3 cursos que duro el como programar en HTML y PHP. Añadir decorados con CSS y scrips JS"
          anio="5-10 del 2025"/>
        <DivText  Titulo="Curso de ReactJS y Lavarel"
          Descripcion="Por medio de estos cursos obtuve los conocimientos para mejorar mis habilidades en el desarrollo web"
          anio="durante 2026"
        />
      </div>
      <Volver />
    </>
  )
}


