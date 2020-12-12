import React from 'react'
import axios from 'axios'


function AllPokemon(props){
    const {pokemon, hash, remove} = props
    return(
        <div className='all'>
            <ul>
                {pokemon.map((curr,idx)=>{
                    return (
                        <li key={idx}>
                            <span><a href={`#poke${curr.id}`} className='name'>{curr.name}</a><button onClick={async()=>{remove(curr.id)}
                        }>Release Pokemon</button></span>
                            {hash === `poke${curr.id}` ? 
                                <div>
                                    <p className='attr'>Type: {curr.type}</p>
                                    <p className='attr'>Health: {curr.health}</p>
                                    <p className='attr'>Attack: {curr.attack}</p>
                                    <a href={`#train${curr.trainor.id}`}>Trainor: {curr.trainor.name}</a>
                                           
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


    