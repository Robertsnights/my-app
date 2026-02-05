import {Galeria} from './creadores/zonaCreador.jsx'
export function Detalles(){
	return(
		<>
			<div className="Espacio">
				<h3 className="Titulo">Galeria de dibujos</h3>
			</div>
			<Galeria {imagen: 'cuadro 1.png'}/>
		</>
	)
}