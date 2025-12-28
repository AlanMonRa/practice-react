import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Altaalumno from "../pages/Altaalumno";
import ReporteAlumnos from "../pages/ReporteAlumnos";
import NoExiste  from "../pages/NoExiste";

function Aplicacion(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/repote-alumnos" element={<ReporteAlumnos />}/>
                <Route path="/alta-alumno" element={<Altaalumno />}/>
                <Route path="*" element={<NoExiste />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Aplicacion;