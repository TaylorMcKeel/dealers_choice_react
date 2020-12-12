import React from 'react'
import axios from 'axios'
const {Component} = React
import AllPokemon from './AllPokemon'
import AllTrainors from './AllTrainors'
import Form from './Form'


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
    async componentDidMount (){
        try{
            const pokemon = (await axios.get('/api/pokemon')).data
            const trainors = (await axios.get('/api/trainors')).data
            this.setState({allPokemon: pokemon, allTrainors: trainors})
            window.addEventListener('hashchange',()=>{
                this.setState({allPokemon: pokemon, allTrainors: trainors})
            })
        }
        catch(er){
            console.log(er)
        }
    }
    render(){
        const {allPokemon, allTrainors} = this.state
        const hash = window.location.hash.slice(1)
        return(
            <div>
                <Form pokemon={allPokemon} trainors={allTrainors}/>
                <a href=''> See All Pokemon({allPokemon.length}) and Trainors({allTrainors.length})</a>
                <div >
                    
                    <div id='content'>
                        <AllPokemon pokemon={allPokemon} hash={hash}/>
                        <AllTrainors trainors={allTrainors} hash={hash}/>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Main
