import React, { Component } from 'react';
import Pokemon from './components/pokemon';




class App extends Component{

  state = {
    pokemon_name: undefined,
    pokemon_type: undefined,
    pokemon_image: undefined

  }

   getPokemon = async (e) =>{
     e.preventDefault();
    const id = e.target.elements.pokemonid.value;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    console.log(data);
   this.setState({
     pokemon_name: data.name.toUpperCase(),
     pokemon_type:  data.types[0].type.name.toUpperCase(),
     pokemon_image:data.sprites.back_default
   })

  }
    render(){
    return (
      <div>
      <Pokemon getPokemon={this.getPokemon}
      pokemon_name={this.state.pokemon_name}
      pokemon_type={this.state.pokemon_type}
      pokemon_image={this.state.pokemon_image}/>
      </div>
    );

    }
 }
export default App;