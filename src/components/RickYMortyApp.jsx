import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { GridCharacters } from "./GridCharacters";
import Pagination from '@mui/material/Pagination';
import { BuscarCharacters } from "./BuscarCharacters";

export const RickYMortyApp = () => {
    const [pagina, setPagina] = useState(1)
    const [buscarPer, setBuscarPer] = useState("")
    const [buscarCategoria, setBuscarCategoria] = useState("")
    const { characters, totalPages } = useCharacters(pagina, buscarPer, buscarCategoria)

    const handleBuscar = (character, category) => {
        setBuscarPer(character)
        setBuscarCategoria(category)
    }

    return (
        <>
            <GridCharacters characters={characters} />
            <div className="mt-5 container d-flex flex-row justify-content-center alig-items-center w-50">
                <nav className="navbar navbar-dark bg-dark fixed-top ">
                    <div className="container-fluid">
                        <img src="https://argentina-programa-4-0.vercel.app/recursos/tt.png" alt="Logo" width="150" height="50" className="d-inline-block align-text-top" />
                        <BuscarCharacters handleBuscar={handleBuscar} />
                    </div>
                </nav>
            </div>
            <Pagination count={totalPages} page={pagina} onChange={(e, value) => setPagina(value)} color="primary" className="d-flex justify-content-center mt-5" />
        </>
    )
}