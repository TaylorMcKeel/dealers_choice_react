import React from 'react'



function AllPokemon(props){
    const {pokemon, hash} = props
    return(
        <div className='all'>
            <ul>
                {pokemon.map((curr,idx)=>{
                    return (
                        <li key={idx}>
                            <a href={`#poke${curr.id}`} className='name'>{curr.name}</a>
                            {hash === `poke${curr.id}` ? 
                                <div>
                                    <p className='attr'>{curr.type}</p>
                                    <p className='attr'>{curr.health}</p>
                                    <p className='attr'>{curr.attack}</p>
                                        <ul>
                                            <li><a href={`#train${curr.trainor.id}`}>{curr.trainor.name}</a></li>
                                            <li className='attr'>{curr.trainor.hometown}</li>
                                            <li className='attr'>{curr.trainor.age}</li>
                                        </ul>
                                </div>
                            : ''}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AllPokemon


    