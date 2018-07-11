import React, { Component } from 'react';
import './App.css';
import Allinputs from './components/allinputs'
import DeletePokemon from './components/deletePokemon'
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
    this.state={
      pokemonArray:[],
      currentPokemon:{
        image:'',
        name:'',
        type:'',
        strength:'',
        weakness:''

      }


    }
    this.filteredPokemon=this.filteredPokemon.bind(this)
    this.addPokemon=this.addPokemon.bind(this)
    this.delete=this.delete.bind(this)
  }
 
  filteredPokemon(name){
    
    axios.post(`/pokemon`,{name:name}).then(result => {
      console.log(result)
      this.setState({currentPokemon:result.data})
    })
  }
  addPokemon(){
    axios.post('/api/myPokemon', {currentPokemon:this.state.currentPokemon})
    .then(pokemonArr=>{
      this.setState({pokemonArray:pokemonArr.data})
    })
  }
 delete(id){
   axios.delete('/delete/pokemon/'+id)
   .then(pokemon=>{
     this.setState({pokemonArray:pokemon.data})
   })
   
  
 }



  render() {  
    console.log(this.state.pokemonArray)
    
    var newArr=this.state.pokemonArray.map((element, i)=>{
      return(
        <div  key={i}>
        <div className='card'>
        <div className='twodiv'>
          <div className='pokemonimage'>
            <img src={element.image} />
          </div>
          <div className='cardinfo'>
            <p>Name: {element.name}</p>
            <p>Type: {element.type}</p>
            <p>Strength: {element.strength}</p>
            <p>Weakness: {element.weakness}</p>
          </div>
          </div>
         <DeletePokemon element={element} delete={this.delete}/>
        </div>
        </div>
      )
    })
    
    return (
      <div className='body'>
        
          <header>
          <img className='pokedexlogo' src='https://camo.githubusercontent.com/1a4b11888ddf9f2b7a9353d6b69503e634e8704c/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67'/>
          </header>
          <Allinputs  newpokemon={this.filteredPokemon}/>
          <section>
          <button className='addbutton' onClick={()=>this.addPokemon()}> + </button>
                <div className='dueldiv'>
                      <div className='pokemonpic'>
                            <img  src={this.state.currentPokemon.image }/>
                      </div>
                      <div className='pokemoninfo'>
                           <p>Name: {this.state.currentPokemon.name}</p>
                           <p>Type: {this.state.currentPokemon.type}</p>
                           <p>Strength: {this.state.currentPokemon.strength}</p>
                           <p>Weakness: {this.state.currentPokemon.weakness}</p>
                    </div>
               </div>
                   
            </section>
          <main>{newArr}</main>
        
      </div>
    );
  }
}

export default App;
