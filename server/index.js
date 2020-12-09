const path = require('path');
const PORT = process.env.PORT || 3000
const {db, sync, Pokemon, Trainor} =  require('../db')
const express = require('express');
const app = express();


app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './dist')));
app.use(express.urlencoded({ extended: false })); //what is this for??


app.get('/',(req,res,next)=>{
    try{
        res.sendFile(path.join(__dirname + './client/index.html'))
    }catch(ex){
        console.log(ex)
    }
})

app.get('/api/pokemon', async(req,res,next)=>{
    try{
        const pokemon = await Pokemon.findAll()
        res.send(pokemon)
    }catch(ex){
        console.log(ex)
    }
})

app.get('/api/trainors',async(req,res,next)=>{
    try{
        const trainors = await Trainor.findAll()
        res.send(trainors)
    }catch(ex){
        console.log(ex)
    }
})

const init = async ()=>{
    try{
        await sync()
        app.listen(PORT, ()=>{
            console.log(`Listening on ${PORT}`)
        })
    }
    catch(er){
        console.log(er)
    }
}

init()

module.exports = app;