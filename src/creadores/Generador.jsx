import React, {use, useState} from 'react'
export function Numeros(){
	const ListaImagenes =['foto1', 'foto2', 'foto3', 'foto4', 'foto5', 'foto6', 'foto7', 'foto8', 'foto9', 'foto10']
	const [valores, Valores]= useState([])

	const generarNumeros = () => {
		const nuevosValores = []
		const usados = new Set()

		while (nuevosValores.length <8){
			const numero = Math.floor(Math.random()*10) +1
			if (!usados.has(numero)){
				nuevosValores.push(numero)
				usados.add(numero)
			}
		}

		Valores(nuevosValores)
	}

	return(
		<div>
			{Selecionardor()}
			<ul>
				{valores.map((item, index)=> <li key={index}>{item}</li>)}
			</ul>
			<button onClick={GenerarValor}>Generar numero</button>
		</div>
	)
}