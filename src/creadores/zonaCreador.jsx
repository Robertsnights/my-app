import './Creador.css'
export function DivText ({Titulo, Descripcion, anio}){
	return(
		<div className="Zona">
			<h2 className="Titular">{Titulo}</h2>
			<h3 className="SubTitular">Descripción: </h3>
			<p className="Texto">{Descripcion}</p>
			<strong className="fechas">{anio}</strong>
		</div>
	)
}