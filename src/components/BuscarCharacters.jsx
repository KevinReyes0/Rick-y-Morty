import { useState } from "react";

export const BuscarCharacters = ({ handleBuscar }) => {
    const [buscarPer, setBuscarPer] = useState("");

    const handleEncontrar = (e) => {
        e.preventDefault();
        handleBuscar(buscarPer);
    }

    return (
        <>
            
            <form class="d-flex" role="search" onSubmit={handleEncontrar}>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setBuscarPer(e.target.value)}/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            
        </>
    );
}
