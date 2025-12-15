import React from "react";
/* import pngaxolocode from "../images/axolocode.png" */
import './styles/FichaAlumno.css'


class FichaAlumno extends React.Component{
    render(){
        const {foto, colorFondo, nombreAlumno} = this.props
        return (
            <div className="ficha">
                <div className="borderazul">
                    <div className="divfoto">
                        <img src={foto} className="fotito" alt="Foto de axolocode"/>
                    </div>
                    <div className="infoalu" style={{ backgroundColor:`${colorFondo}`}}>
                        <div className="detalle">Nombre: {nombreAlumno}</div>
                    </div>
                    <div className="alert alert-primary" role="alert">
                        Hola AxoloCode de carrera {this.props.carrera}
                        <input type="text" className="form-control" placeholder={this.props.ph}></input>
                    </div>
                    <div>
                        <button type="button" className={this.props.tipomensaje}>Ver detalle</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FichaAlumno