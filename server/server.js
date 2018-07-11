require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const pokemonCtrl = require('./controller/pokemon-controller')

const app=express()

const baseURL='http://pokeapi.co/api/v2'

//app.use() --> middleware that runs for EVERT request
app.use(bodyParser.json())

//Endpoint
app.post('/pokemon', pokemonCtrl.getting);
app.post('/api/myPokemon', pokemonCtrl.adding);
app.delete('/delete/pokemon/:id', pokemonCtrl.delete)

// app.put()


//Endpoint


const port = 3005;
app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Listening on port: ${process.env.SERVER_PORT}`)
})