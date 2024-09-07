export const reqCharacters = async (pagina, buscarPer, buscarCategoria) => {
    let url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
    
    if (buscarPer !== null && buscarPer !== "") {
        url = `https://rickandmortyapi.com/api/character?name=${buscarPer}&page=${pagina}`;
    }
    
    if (buscarCategoria !== null && buscarCategoria !== "") {
        url = `https://rickandmortyapi.com/api/character?species=${buscarCategoria}&page=${pagina}`;
    }

    const resp = await fetch(url);
    const data = await resp.json();

    return data;
};