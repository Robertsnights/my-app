import { useState } from 'react'
import './App.css'

function Cabe(){
	return(
		<>
			<div className="Logo"><div className="Logotipo"></div></div>
			<div className="Nombre">
				<h1><strong>Nicolas Agustin Sirtori</strong></h1>
			</div>
			<nav className="Botonera">
				<ul>
					<li className="menu"><a href={'#Cabecera'}>	Inicio</a></li>
					<li className="menu"><a href={'#Cuerpo1'}>Sobre Mi</a></li>
					<li className="menu"><a href={'#Cuerpo2'}>Hobbies</a></li>
					<li className="menu"><a href={'#Cuerpo3'}>Proyectos</a></li>
					<li className="menu"><a href={'#Final'}>Final</a></li>
				</ul>
			</nav>
		</>
	)
}


export default Cabe