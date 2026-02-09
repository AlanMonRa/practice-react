import React from "react"

class Altaalumno extends React.Component{
    constructor(){
        super();
        this.state = {
            numeroUno:0,
            numeroDos:0,
            total:0,
        }
        this.leerNumeroUno = this.leerNumeroUno.bind(this); // Accesamos desde el constructor a nuestra funcion
        this.leerNumeroDos = this.leerNumeroDos.bind(this);
        this.calculaTotal = this.calculaTotal.bind(this);
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
        this.setState({total:parseInt(this.state.numeroUno) + parseInt(this.state.numeroDos)}) // Asignamos el valor a nuestra variable
        console.log(this.state.total)
    }

    render(){
        return(
            <div>
                {/* <form> */}
                    <div>
                        Ingresa el número 1
                        <input type='number' name="numeroUno" onChange={this.leerNumeroUno}/>
                    </div>
                    <div>
                        Ingresa el número 2
                        <input type='number' name="numeroDos" onChange={this.leerNumeroDos}/>
                    </div>
                    <input type="submit" value={"Calculador"} onClick={this.calculaTotal}/>
                    <div>
                        Total
                        <input type='number' name="total" value={this.state.total}/>
                    </div>
                {/* </form> */}
            </div>
        )
    }
}

export default Altaalumno