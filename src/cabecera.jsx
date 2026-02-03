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
					<li className="menu"><a href={'#Cabecera'}>a</a></li>
					<li className="menu"><a href={'#a'}>a</a></li>
					<li className="menu"><a href={'#b'}>a</a></li>
					<li className="menu"><a href={'#c'}>a</a></li>
					<li className="menu"><a href={'#final'}>a</a></li>
				</ul>
			</nav>
		</>
	)
}


export default Cuerpo1