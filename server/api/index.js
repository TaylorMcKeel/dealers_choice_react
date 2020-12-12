const express= require('express')
const {Pokemon, Trainor} = require('../db')
const router = express.Router()

router.get('/pokemon', async(req,res,next)=>{
    try{
        const pokemon = await Pokemon.findAll({
            include: Trainor
        })
        res.send(pokemon)
    }
    catch(er){
        console.log(er)
    }
})


router.get('/trainors', async(req,res,next)=>{
    try{
        const trainors = Trainor.findAll({
            include: Pokemon
        })
    }
    catch(er){
        console.log(er)
    }
})



module.exports= router