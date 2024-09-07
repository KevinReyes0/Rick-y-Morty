import { useState } from "react"

export const BuscarCharacters = ({ handleBuscar }) => {
    const [buscarPer, setBuscarPer] = useState("")
    const [buscarCat, setBuscarCat] = useState("")

    const handleEncontrar = (e) => {
        e.preventDefault()
        handleBuscar(buscarPer, buscarCat)
    }

    const handleCategoria = (category) => {
        setBuscarCat(category)
        handleBuscar(buscarPer, category)
    }

    return (
        <>
            <form className="d-flex" role="search" onSubmit={handleEncontrar}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => setBuscarPer(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Species
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => handleCategoria("Human")}>Human</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleCategoria("Alien")}>Alien</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => handleCategoria("Robot")}>Robot</a></li>
            </ul>
        </>
    )
}
