import {Galeria} from './creadores/zonaCreador.jsx'
import './App.css'
export function Detalles(){
	return(
		<>
			<div className="Espacio">
				<h3 className="Titulo">Galeria de dibujos</h3>
				<div className="Contenedor">
					<Galeria Etiqueta="Beta" imagen = '../../public/imagenes/cuadroA.png'/>
					<Galeria Etiqueta="Beta" imagen = '../../public/imagenes/MesaCorrupta.png'/>
					<Galeria Etiqueta="Beta" imagen = '../../public/imagenes/Sala de Jefe.png'/>
					<Galeria Etiqueta="Alfa" imagen = '../../public/imagenes/pasillo.png'/>
				</div>
			</div>
			
		</>
	)
}