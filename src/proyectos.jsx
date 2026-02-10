import {Volver} from "./creadores/zonaCreador.jsx";
import './Tablero.css'
import { RellenadorDeTabla } from "./creadores/zonaCreador.jsx";
export function Tablas(){
    return(
        <> 
            <div className="Tablero">
                <h2>Proyectos en Desarrollo</h2>
                <table>
                    <thead>
                        <RellenadorDeTabla Nombre="Proyecto" Estado="Estado" Fecha="Fecha de Entrega" Requisito="Requisito"/>
                    </thead>
                    <tbody>
                        <RellenadorDeTabla Nombre="Shadow of Imperium" Estado="En progreso" Fecha="23/06/2025" Requisito="Realizar los concept arts de los personajes"/>
                        <RellenadorDeTabla Nombre="Calculadora ReactJS" Estado="En espera" Fecha="10/02/2026" Requisito="Empezar"/>
                        <RellenadorDeTabla Nombre="Proyecto Secreto" Estado="Por Iniciar" Fecha="N/A" Requisito="N/A"/>
                        <RellenadorDeTabla Nombre="Pagina Web" Estado="En progreso" Fecha="01/02/2026" Requisito="Continuar"/>
                    </tbody>
                </table>
                <h3>*Los proyectos, fechas, y requisitos se actualizan según el progreso del desarrollo.</h3>
                <p>Durante el proceso de avances en estos proyectos se fueron pausando debido a que requeria aprender
                    nuevas habilidades para poder continuar, por lo que se fueron dejando de lado para enfocarme en aprender lo necesario para poder avanzar,
                    y una vez que se aprendieron las habilidades necesarias se retomaron los proyectos para continuar con su desarrollo.
                </p>
            </div>
            <Volver />
        </>
    )
}