import { render } from "@testing-library/react"
import React from "react"

class Altaalumno extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div>
                        Nombre
                        <input type='text'/>
                    </div>
                    <div>
                        Apellido
                        <input type='text'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Altaalumno