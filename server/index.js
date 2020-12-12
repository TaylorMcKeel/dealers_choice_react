const path = require('path');
const PORT = process.env.PORT || 3000
const {db, sync, Pokemon, Trainor} =  require('./db')
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.urlencoded({ extended: false })); //what is this for??


app.get('/',(req,res,next)=>{
    try{
        res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
    }catch(ex){
        console.log(ex)
    }
})


app.get('/api/pokemon', async(req,res,next)=>{
    try{
        const pokemon = await Pokemon.findAll({
            include: Trainor
        })
        res.send(pokemon)
    }catch(ex){
        console.log(ex)
    }
})

app.get('/api/trainors',async(req,res,next)=>{
    try{
        const trainors = await Trainor.findAll({
            include: Pokemon
        })
        res.send(trainors)
    }catch(ex){
        console.log(ex)
    }
})

app.post('/api/pokemon', async (req, res, next) => {
    try {
        console.log('creating a pokemon')
      const newPokemon = await Pokemon.create({
        name: req.body.name,
        type: req.body.type,
        health: req.body.health,
        attack: req.body.attack,
        trainorId: req.body.trainorId
      });
      res.send(newPokemon);
    } catch (ex) {
      next(ex);
    }
  });

  app.post('/api/trainors', async (req, res, next) => {
    try {
        console.log('creating a trainor')
        const newTrainor = await Trainor.create({
        name: req.body.name,
        hometown: req.body.hometown,
        age: req.body.age,
      });
      res.send(newPokemon);
    } catch (ex) {
      next(ex);
    }
  });

  app.delete('/api/pokemon', async(req,res,next)=>{
      try{
          console.log('releasing a pokemon')
          const pokemon = await Pokemon.findByPk(req.body.pokeId)
          await pokemon.destroy()
          res.send('released')
      }
      catch(ex){
          console.log(ex)
      }
  })

  app.delete('/api/trainors', async(req,res,next)=>{
    try{
        console.log('releasing a trainor and their pokemon')
        const trainor = await Trainor.findByPk(req.body.trainId)
        await trainor.destroy()
        res.send('released')
    }
    catch(ex){
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