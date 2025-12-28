import React from 'react'
import ReactDOM from 'react-dom/client'
/* import ReporteAlumnos from './pages/ReporteAlumnos' */
import Aplicacion from './components/Aplicacion'
import 'bootstrap/dist/css/bootstrap.css'

/* const carrera = 'Ingeniería en Sistemas Computacionales'
const alumno = 'AxoloCode'
const elemento = <div>En la carrera de {carrera} esta el alumno {alumno}</div> */
/* const mensaje = <div>Hola AxoloCode</div> */

/* const alumno = {
  nombre: 'Axolo',
  apellido: 'Code',
  edad: 21,
  carrera: 'Ingeniería en Sistemas Computacionales'
}

function obtenerNombreCompleto(alumno) {
  return `${alumno.nombre} ${alumno.apellido}`
}

function salon (alumno){
  return ` estudió ${alumno.carrera} y actualmente tiene ${alumno.edad} años`
}

const elemento = <div>Hola alumno {obtenerNombreCompleto(alumno)} qué {salon(alumno)}</div> */

/* const dinero = 300

const producto1 = {
  nombre:'Pelotas',
  costo:300
}

const producto2 = {
  nombre:'Casas',
  costo:100
}

function meAlcanza(dinero){
  if(dinero >= 300){
    return <h1>Sí me alcanza para {producto1.nombre} de {producto1.costo} pesos</h1>
  }else{
    return <h1>Solo me alcanza para {producto2.nombre} de {producto2.costo} pesos</h1>
  }
}

const elemento = (<div>
                    <h1>Mi dinero es {dinero}</h1>
                    <div>{meAlcanza(dinero)}</div>
                  </div>) */

/* const caja = {
  tipo:'text',
  ph:'Teclea texto',
  link:'https://www.google.com.mx',
  tg:'_blank'
}

function muestraCaja(){
  return <div><input type={caja.tipo} placeholder={caja.ph}></input></div>
}

function muestraLink(){
  return <div><a href={caja.link} target={caja.tg}> Google </a></div>
}

const elemento = (
  <div>
    {muestraCaja()}
    {muestraLink()}
  </div>
) */


const elemento = (
  <div>
    {/* <h1>Hola</h1> */}
    <Aplicacion/>
{/*     <TituloCarrera
          carrera='ISC'/>
    <FichaAlumno
          nombreAlumno="Alan Ramos"
          carrera="ISC"
          ph="Escribe tu nombre"
          foto="images/ac1.png"
          colorFondo="red"
          tipomensaje="btn btn-danger"
          ></FichaAlumno> */}
    {/* <FichaAlumno
          nombreAlumno="Elizabeth TC"
          carrera="ISC"
          ph="Escribe tu carrera"
          foto="images/ac2.png"
          colorFondo="blue"
          tipomensaje="btn btn-primary"
          ></FichaAlumno> */}
  </div>
)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(elemento)
