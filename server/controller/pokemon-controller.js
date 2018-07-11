const baseURL='http://pokeapi.co/api/v2'
const axios = require('axios')

var pokemonarr = []
var id=0

module.exports ={
    getting:(req,res)=>{
        axios.get('http://pokeapi.co/api/v2/pokemon/' + req.body.name ).then((val)=>{
            let type=val.data.types[0].type.name
            axios.get('http://pokeapi.co/api/v2/type/'+ type).then(results=>{
               
                let pokemon ={
                    image:val.data.sprites.front_default,
                    name:val.data.forms[0].name,
                    type:type,
                    strength:results.data.damage_relations.double_damage_to[0].name,
                    weakness:results.data.damage_relations.double_damage_from[0].name
                }
               
               res.status(200).send(pokemon)
            })
        })
    },
    adding:(req,res)=>{
        req.body.currentPokemon.id=id
        id++
        pokemonarr.push(req.body.currentPokemon);
        res.status(200).send(pokemonarr)
    },
    delete:(req,res)=>{
        let i= pokemonarr.findIndex(element=>element.id === +req.params.id)     
        pokemonarr.splice(i,1)
        res.status(200).send(pokemonarr)
    },
  
   
}