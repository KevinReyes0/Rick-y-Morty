export const GridCharacters = ({characters}) => {
    return(
        <>
            <div className='mt-5 d-flex flex-row row row-cols-6'>
            {
                characters &&
                characters.map((char) => (
                        <div key={char.id} className="mt-5">
                            <h5 className='text-center'>{char.name}, {char.species}</h5>
                            <img style={{width: '200px'}} src={char.image} alt='' />
                        </div>
                    ))
            }
        </div>
        </>
    )

}

