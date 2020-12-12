import React from 'react'
import axios from 'axios'


function AllTrainors(props){
    const {trainors, hash, remove} = props
    return(
        <div className='all'>
            <ul>
                {trainors.map((curr,idx)=>{
                    return (
                        <li key={idx}>
                            <span><a href={`#train${curr.id}`} className='name'>{curr.name}</a><button onClick={async()=>{remove(curr.id)}
                        }>Remove Trainor</button></span>
                            {hash === `train${curr.id}` ? 
                                <div>
                                    <p className='attr'>{curr.hometown}</p>
                                    <p className='attr'>{curr.age}</p>
                                    <p className='attr'>Pokemon:</p>
                                    <ul>
                                        {curr.pokemons.map((item,idx)=>{
                                            return(
                                                <li key={idx}>
                                                    <a href={`#poke${item.id}`}>{item.name}</a>
                                                </li>
                                            )
                                        })}
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

export default AllTrainors
    