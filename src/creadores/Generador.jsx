import React, { useState } from "react";

export function Dado(){
	const [valor, setValor] = useState(0)
	const [lanzado, setLanzado] = useState(4)
	const [repetir, setRepetir] = useState(1)
	const generarValor = (e) => {

		let total=0

		const veces = parseInt(repetir)||1
		const dado = parseInt(lanzado)||1

		for (let i =0; i<veces; i++){
			total += Math.floor(Math.random() * dado) + 1

			setValor(valor + total)
		}
		setValor(valor + total)
	}
	const resetaryGenerar = () => {
		setValor(0)
	
	}

	return(
		<div>
			<form onSubmit={(e) => {e.preventDefault(); setValor();}}>
				<input type="number" placeholder="valor del dado"
				value={lanzado}
				onChange={(e) => setLanzado(e.target.value)}
				min="3"
				/>
				<input type="number" placeholder="veces a lanzar"
				value={repetir}
				onChange={(e) => setRepetir(e.target.value)}
				/>
				
			</form>
			<button onClick={generarValor}>Generar valor</button>
			<button onClick={resetaryGenerar}>Reiniciar</button>
			<p>Valor del dado: {valor}</p>
			
		</div>
	)
}