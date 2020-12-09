const PORT = process.env.PORT || 3000
const {db, sync} =  require('./db')
const server = require('./index')

const init = async ()=>{
    try{
        await sync()
        server.listen(PORT, ()=>{
            console.log(`Listening on ${PORT}`)
        })
    }
    catch(er){
        console.log(er)
    }
}

init()