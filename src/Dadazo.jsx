import { Dado } from "./creadores/Generador";
import "./Tablero.css"

export function Dadazo(){
    return(
        <>
        <div className="Dadazo-Contenedor">
            <h2 className="Titulo">Dadazo</h2>
            <Dado/>
        </div>
        </>
    )
}