import React from "react"

class Altaalumno extends React.Component{
    constructor(){
        super();
        this.state = {
            numeroUno:0,
            numeroDos:0,
            total:0,
            tipo:'',
            status:'',
        }
        this.leerNumeroUno = this.leerNumeroUno.bind(this); // Accesamos desde el constructor a nuestra funcion
        this.leerNumeroDos = this.leerNumeroDos.bind(this);
        this.calculaTotal = this.calculaTotal.bind(this);
        this.ctipo = this.ctipo.bind(this);
    }
    leerNumeroUno (e)
    {
        /* console.log(e.target.value) */ // Obtenemos el valor de la caja de texto
        this.setState({numeroUno:e.target.value}) // Asignamos el valor a nuestra variable
        /* console.log(this.state.numeroUno) */ // Mostramos el valor de la variable
    }

    leerNumeroDos (e)
    {
        this.setState({numeroDos:e.target.value}) // Asignamos el valor a nuestra variable
    }

    calculaTotal(e){
        if(this.state.tipo === "A"){
            this.setState({total:parseInt(this.state.numeroUno) * parseInt(this.state.numeroDos) + 100}) // Asignamos el valor a nuestra variable
        } else {
            this.setState({total:parseInt(this.state.numeroUno) * parseInt(this.state.numeroDos) + 400}) // Asignamos el valor a nuestra variable
        }

        switch(this.state.numeroUno)
        {
            case '7':
                /* return */ this.setState({status:'Buen Empleado'})
                break;
            default:
                /* return */ this.setState({status:'Mal Empleado'})
                break;
        }

        console.log(this.state.total)
    }

    ctipo(e){
        this.setState({tipo:e.target.value})
    }

    render(){
        return(
            <div>
                {/* <form> */}
                    <div>
                        {/* Ingresa el número 1 */}Días Trabajados
                        <input type='number' name="numeroUno" onKeyUp={this.leerNumeroUno}/>
                    </div>
                    <div>
                        {/* Ingresa el número 2 */}Ingreso por día
                        <input type='number' name="numeroDos" onKeyUp={this.leerNumeroDos}/>
                    </div>
                    <div>
                        Tipo
                        <select name="Tipo" onChange={this.ctipo}>
                            <option value='A'>A</option>
                            <option value='B'>B</option>
                            <option value='C'>C</option>
                        </select>
                    </div>
                    <input type="submit" value={"Calculador"} onClick={this.calculaTotal}/>
                    <div>
                        Total
                        <input type='number' name="total" value={this.state.total}/>
                    </div>
                    <div>
                        Status
                        <input type='text' name="status" value={this.state.status} disabled='disabled'></input>
                    </div>
                {/* </form> */}
            </div>
        )
    }
}

export default Altaalumno