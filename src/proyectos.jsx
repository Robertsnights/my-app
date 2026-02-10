import {Volver} from "./creadores/zonaCreador.jsx";
import './Tablero.css'
export function Tablas(){
    return(
        <> 
            <div className="Tablero">
                <table>
                    <tr>
                        <th>Proyecto</th>
                        <th>Descripcion</th>
                    </tr>
                </table>
                <Volver />
            </div>
        </>
    )
}