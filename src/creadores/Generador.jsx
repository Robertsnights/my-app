import React, {useState} from 'react'
export function Numeros(){
	const [num, SetNumero] = useState(0)

	const GenerarValor = ()=>{
		const NuevoValor = Math.floor(Math.random()*10)+1;
		SetNumero=NuevoValor;
	}
	return(
		<div>
			<h4>{num}</h4>
			<button onClick={GenerarValor}>Generar numero</button>
		</div>
	)
}