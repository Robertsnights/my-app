import './Creador.css'
import './BotonesCss.css'
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

export function Galeria({Etiqueta, imagen}){

	return(
		<img className={Etiqueta} src={imagen}></img>
	)
}

export function Volver(){
	return(
		<div className="espacio"><a href="#Cabecera" className="Boton">Volver</a></div>
	)
}
export function RellenadorDeTabla({Nombre, Estado, Fecha, Requisito}){
	return(
		<tr>
			<td>{Nombre}</td>
			<td>{Estado}</td>
			<td>{Fecha}</td>
			<td>{Requisito}</td>
		</tr>
	)
}