import { useState } from 'react'
import './App.css'

function Cuerpo1(){
	return(
		<>
			<div className="Logo"><div className="Logotipo"></div></div>
			<div className="Nombre">
				<h1><strong>Nicolas Agustin Sirtori</strong></h1>
			</div>
			<nav className="Botonera">
				<ul>
					<li className="menu"><a href={'#Cabecera'}>	Inicio</a></li>
					<li className="menu"><a href={'#a'}>Sobre Mi</a></li>
					<li className="menu"><a href={'#b'}>Hobbies</a></li>
					<li className="menu"><a href={'#c'}>Proyectos</a></li>
					<li className="menu"><a href={'#final'}>Final</a></li>
				</ul>
			</nav>
		</>
	)
}


export default Cuerpo1