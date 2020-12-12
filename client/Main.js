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
        this.removeTrainor = this.removeTrainor.bind(this)
        this.removePokemon = this.removePokemon.bind(this)
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
    async removeTrainor(id){
        await axios.delete('/api/trainors',{data: {trainId: id}})
        const trainors = (await axios.get('/api/trainors')).data
        this.setState({allTrainors: trainors})
    }
    async removePokemon(id){
        await axios.delete('/api/pokemon',{data: {pokeId: id}})
        const pokemon = (await axios.get('/api/pokemon')).data
        this.setState({allPokemon: pokemon})
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
                        <AllPokemon pokemon={allPokemon} hash={hash} remove={this.removePokemon}/>
                        <AllTrainors trainors={allTrainors} hash={hash} remove={this.removeTrainor}/>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default Main
