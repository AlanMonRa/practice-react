import React from "react";

class AlumnoInfo extends React.Component{
    /* constructor(){
        super();
        this.state={
            foto:'',
            nombreAlumno:'',
            carrera:'',
            colorFondo:''
        }
    } */
    // Declarando así el state evitamos declarar todas las variables
    state={}

    recibeValores = e => {
        // console.log(`${e.target.name}:${e.target.value}`)
        /* let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState) */
        // Hacen lo mismo
        this.setState({[e.target.name]:e.target.value})
    }

    // Evitamos mandar los datos y recargar al darle click al formulario
    controlSubmit = e => {
        e.preventDefault()
    }

    render(){
        return(
            <form>
            <div>
                <div>
                    Foto
                    <input type="text" name="foto" onKeyUp={this.recibeValores}></input>
                </div>
                <div>
                    Nombre
                    <input type="text" name="nombreAlumno" onKeyUp={this.recibeValores}></input>
                </div>
                <div>
                    Carrera
                    <select name="carrera" onChange={this.recibeValores}>
                        <option defaultChecked>Selecciona un valor</option>
                        <option value={'TIC'}>TIC</option>
                        <option value={'Mantenimiento'}>Mantenimiento</option>
                        <option value={'Paramendico'}>Paramendico</option>
                    </select>
                </div>
                <div>
                    Color de Fondo
                    <input type="radio" name="colorFondo" value={'Red'} onChange={this.recibeValores}></input>Rojo
                    <input type="radio" name="colorFondo" value={'Green'} onChange={this.recibeValores}></input>Verde
                </div>
                <input type="submit" value={'Transfiere'} onClick={this.controlSubmit}></input>
            </div>
            </form>
        )
    }
}

export default AlumnoInfo;