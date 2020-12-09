import React from 'react'
import axios from 'axios'
const {Component} = React

class Main extends Component{
    constructor(props){
        super()
        this.state={
            allPokemon: [],
            allTrainors: [],
            pokemon: [],
            trainor: []
        }
    }
    componentDidMount(){
        try{
            const pokemon = await (axios.get('/api/pokemon')).data
            const trainors = await (axios.get('/api/trainors')).data
            this.setState({pokemon, trainors})
            console.log(this.state)
        }
        catch(er){
            console.log(er)
        }
    }
    render(){
        const {allPokemon, allTrainors, pokemon, trainor} = this.state
        return(
            <div>
                <Form />
                <div id='content'>
                    {pokemon.length === 0 && trainor.length ===0 ? (
                        <div>
                            <AllPokemon/>
                            <AllTrainors/>
                        </div>
                    ) : pokemon.length > 0 ? (
                        <Pokemon/>
                    ) : (
                        <Trainor/>
                    )
                    }
                </div>
            </div>
        )
    }
}

export default Main
