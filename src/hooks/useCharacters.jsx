import { useEffect, useState } from "react"
import { reqCharacters } from "../service/characters"

export const useCharacters = (pagina, buscarPer) => {
    const [characters, setCharacters] = useState([])
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        reqCharacters(pagina, buscarPer).then((data) => {
            setCharacters(data.results)
            setTotalPages(data.info.pages)
        })
    }, [pagina, buscarPer])

    return {
        characters,
        totalPages
    }
}
