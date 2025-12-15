import React from "react";
import './styles/TituloCarrera.css'

function TituloCarrera(props){
    return(
        <div id="titulo">
            Alumnos de {props.carrera}
        </div>
    )
}

export default TituloCarrera