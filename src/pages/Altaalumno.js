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
            genero:'',
            area1:false,
            area2:false,
            area3:false,
        }
        this.valoresFormularios = this.valoresFormularios.bind(this);
        this.calculaTotal = this.calculaTotal.bind(this);
    }

    valoresFormularios = ({name, value, checked, type}) => {
        this.setState(() => {
            return{[name]: type === "checkbox" ? checked:value};
        });
    };

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

    render(){
        return(
            <div>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                {/* <form> */}
                    <div>
                        {/* Ingresa el número 1 */}Días Trabajados
                        <input type='number' name="numeroUno" onKeyUp={event => this.valoresFormularios(event.target)}/>
                    </div>
                    <div>
                        {/* Ingresa el número 2 */}Ingreso por día
                        <input type='number' name="numeroDos" onKeyUp={event => this.valoresFormularios(event.target)}/>
                    </div>
                    <div>
                        Tipo
                        <select name="tipo" onChange={event => this.valoresFormularios(event.target)}>
                            <option value='A'>A</option>
                            <option value='B'>B</option>
                            <option value='C'>C</option>
                        </select>
                    </div>
                    <div>
                        Genero
                        <input type='radio' name="genero" value={'M'} onChange={event => this.valoresFormularios(event.target)}/> Masculino
                        <input type='radio' name="genero" value={'F'} onChange={event => this.valoresFormularios(event.target)}/> Femenino
                        <div>
                            Áreas de Trabajo
                            <br></br>
                            <input type="checkbox" name="area1" value='torreon' onChange={event => this.valoresFormularios(event.target)}/> Torreon
                            <br></br>
                            <input type="checkbox" name="area2" value='toluca' onChange={event => this.valoresFormularios(event.target)}/> Toluca
                            <br></br>
                            <input type="checkbox" name="area3" value='tehuacan' onChange={event => this.valoresFormularios(event.target)}/> Tehuacán
                        </div>
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