import React from 'react';

export default function DeletePokemon(props){
    return  (
    <button onClick={()=>props.delete(props.element.id)}> delete </button>
    )
}