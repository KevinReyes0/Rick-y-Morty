import { useEffect, useState } from "react"
import { reqCharacters } from "../service/characters"

export const useCharacters = (pagina, buscarPer, buscarCategoria) => {
    const [characters, setCharacters] = useState([])
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        reqCharacters(pagina, buscarPer, buscarCategoria).then((data) => {
            setCharacters(data.results)
            setTotalPages(data.info.pages)
        })
    }, [pagina, buscarPer, buscarCategoria])

    return {
        characters,
        totalPages
    }
}