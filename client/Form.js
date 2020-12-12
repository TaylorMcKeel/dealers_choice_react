import React from 'react'
import axios from 'axios'
const {Component} = React

class Form extends Component{
    constructor(){
        super()
        this.state ={
            allPoke: [],
            allTrain: [],
            pokeName: '',
            pokeType: '',
            pokeHealth: 0,
            pokeAttack: '',
            pokeTrain: '',
            trainName: '',
            trainHome: '',
            trainAge: 0
        }
    }
    async componentDidMount (){
        try{
            const pokemon = (await axios.get('/api/pokemon')).data
            const trainors = (await axios.get('/api/trainors')).data
            this.setState({allPoke: pokemon, allTrain: trainors})
        }
        catch(er){
            console.log(er)
        }
    }
    render(){
        const {allPoke, allTrain}= this.state
        return(
            <div id='forms'>
                <div id='pokeform'>
                    <h3>Add a Pokemon</h3>
                    <form>
                        <label for="name">Name:</label>
                        <input type="text" id="fname" name="fname" defaultValue="Pokemon Name" onChange={(ev)=>{
                            this.setState({pokeName: ev.target.value})
                        }}/>
                        <label for="type">Type:</label>
                        <input type="text" id="fname" name="fname" defaultValue="Pokemon Type" onChange={(ev)=>{
                            this.setState({pokeType: ev.target.value})
                        }}/>
                        <label for="health">Health:</label>
                        <input type="text" id="fname" name="fname" defaultValue="Pokemon Health" onChange={(ev)=>{
                            this.setState({pokeHealth: ev.target.value})
                        }}/>
                        <label for="attack">Attack:</label>
                        <input type="text" id="fname" name="fname" defaultValue="Pokemon Attack" onChange={(ev)=>{
                            this.setState({pokeAttack: ev.target.value})
                        }}/>
                        <label for="trainor">Trainor:</label>
                        <select id="trains" name="Trainors" selected='Select Trainor' onChange={(ev)=>{
                            this.setState({pokeTrain: ev.target.value})
                        }}>
                            <option defaultValue=''>Select a Trainor</option>
                            {allTrain.map(curr=>{
                                return(
                                    <option value={curr.id}>{curr.name}</option>
                                )
                            })}
                        </select>
                        <button id='createpoke' onClick={async()=>{
                            await axios.post('/api/pokemon',{name: this.state.pokeName, type: this.state.pokeType, health: this.state.pokeHealth, attack: this.state.pokeAttack, trainorId:  this.state.pokeTrain})
                        }
                        }>Create Pokemon</button>
                </form>
                </div>
                
                <div id='trainform'>
                    <h3>Add a Trainor</h3>
                    <form>
                        <label for="name">Name:</label>
                        <input type="text" id="fname" name="fname" defaultValue="Trainor Name" onChange={(ev)=>{
                            this.setState({trainName: ev.target.value})
                        }}/>
                        <label for="hometown">Hometown:</label>
                        <input type="text" id="fname" name="fname" defaultValue="Trainor Hometown" onChange={(ev)=>{
                            this.setState({trainHome: ev.target.value})
                        }}/>
                        <label for="age">Age:</label>
                        <input type="text" id="fname" name="fname" defaultValue="Trainor Age" onChange={(ev)=>{
                            this.setState({trainAge: ev.target.value})
                        }}/>
                        <button id='createtrain' onClick={async()=>{
                            await axios.post('/api/trainors',{name: this.state.trainName, hometown: this.state.trainHome, age: this.state.trainAge})
                        }
                        }>Create Trainor</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form