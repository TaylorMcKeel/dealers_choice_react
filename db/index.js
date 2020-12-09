const Sequelize = require('sequelize');
const Pokemon = require('./pokemon')
const Trainor = require('./trainor')
const db = require('./db')
Pokemon.belongsTo(Trainor)
Trainor.hasMany(Pokemon)

const sync = async () =>{
    try{
        await db.sync({ force: true })
        const squirtle = await Pokemon.create({name: 'Squirtle', health: 200,type: 'Water', attack: 'water gun'})
        const charmander =await Pokemon.create({name: 'Charmander', health: 300,type: 'Fire', attack: 'ember'})
        const jigglypuff = await Pokemon.create({name: 'Jigglypuff', health: 100,type: 'Normal', attack: 'sleep'})
        const onyx = await Pokemon.create({name: 'Onyx', health: 400,type: 'Rock', attack: 'rock smash'})
        const magmar = await Pokemon.create({name: 'Magmar', health: 350,type: 'Fire', attack: 'flamethrower'})
        const ash = await Trainor.create({name:'Ash', hometown:'Pallet', age: 25})
        const misty = await Trainor.create({name:'Misty', hometown:'NYC', age: 36})
        const brock = await Trainor.create({name:'Brock', hometown:'Tulum', age: 45})
        squirtle.trainorId = ash.id
        charmander.trainorId= ash.id
        jigglypuff.trainorId = misty.id
        onyx.trainorId = brock.id
        magmar.trainorId = ash.id
        await Promise.all([squirtle.save(),charmander.save(),jigglypuff.save(),onyx.save(),magmar.save(),ash.save(),misty.save(),brock.save()])
    }
    catch(ex){
        console.log(ex)
    }

}

module.exports = {
    db,
    Pokemon,
    Trainor,
    sync
}