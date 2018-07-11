import React, { Component } from 'react';

import axios from 'axios'
class Allinputs extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            // type:'',
            // damagerelations:'',
            // image:'',
        }
    }
    newName(name){
        this.setState({name:name})
    }
    // updatenewname(){
    //     console.log(this.state.name)
    //     axios.post(`/pokemon`,{name:this.state.name}).then(result => {
    //        return 
    // })
    // }
    // newType(type){
    //     this.setState({type})
    // }
    // newWeakness(weakness){
    //     this.setState({weakness})
    // }
    // newStrength(strength){
    //     this.setState({strength})
    // }

    render(){
        return(
            <div className='changesearch'>
             <input className='inputbox' placeholder='NAME' onChange={(e)=>this.newName(e.target.value)}/>
            <button className='searchbutton' onClick={()=>this.props.newpokemon(this.state.name)}>Search</button>
       
        
           </div>
        )
    }
}

export default Allinputs