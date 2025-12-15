import React from "react";
import FichaAlumno from "./FichaAlumno";
import TituloCarrera from "./TituloCarrera";

function ListaAlumnos(props) {
    return (
        <div>
            {props.detallealumno.map((reporte) => {
                console.log(reporte)
                return (
                <FichaAlumno
                    nombreAlumno={reporte.nombreAlumno}
                    carrera={reporte.carrera}
                    ph="Escribe tu nombre"
                    foto={reporte.foto}
                    colorFondo={reporte.colorFondo}
                    tipomensaje="btn btn-danger"
                    ></FichaAlumno>
                )
            })}
            </div>
    )
}

export default ListaAlumnos;