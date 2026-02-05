import React, {use, useState} from 'react'
export function Numeros(){
	const [num, setNumero] = useState(0)
	const ListaImagenes =['foto1', 'foto2', 'foto3', 'foto4', 'foto5', 'foto6', 'foto7', 'foto8', 'foto9', 'foto10']
	const [valores, Valor] = useState([])
	const GenerarValor = ()=>{
		const NuevoValor = Math.floor(Math.random()*10)+1;
		setNumero(NuevoValor);
	}
	const Selecionardor = ()=>{
		const regla = useState(0)
		while (regla <8)  {
			{GenerarValor}
			const guardado=useState(0)
			const prueba= Valor.includes(guardado)
			if(({num}!= guardado)){
				if(!prueba){
					Valor.push(num)
					guardado =num
					regla = regla + 1
				}
			}
		}
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