import React from 'react'
import TituloCarrera from '../components/TituloCarrera'
import ListaAlumnos from '../components/ListaAlumnos'

class ReporteAlumnos extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            datos:[
                {
                    "nombreAlumno": "Alan Gerardo M. R.",
                    "foto": "images/ac1.png",
                    "colorFondo": "green",
                    "carrera": "ISC UPMP",
                },
                {
                    "nombreAlumno": "Elizabeth T. C.",
                    "foto": "images/ac2.png",
                    "colorFondo": "purple",
                    "carrera": "ISC UPMP 2",
                },
                {
                    "nombreAlumno": "José Francisco M. R.",
                    "foto": "images/ac3.png",
                    "colorFondo": "blue",
                    "carrera": "AYGE UPMP",
                },
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    <TituloCarrera carrera='ISC UPMP'></TituloCarrera>
                </div>
                <a href='/alta-alumno' className='btn btn-success'> Alta de alumnos </a> {/* stretched-link */}
                <div>
                    <ListaAlumnos detallealumno={this.state.datos}></ListaAlumnos>
                </div>
            </div>
        )
    }
}

export default ReporteAlumnos