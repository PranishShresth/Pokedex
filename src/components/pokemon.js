import React, { Component }from "react";
import ("../App.css")

class Pokemon extends Component{

    render(){

        return(
            
            <div className="container">
                <h1>Pokedex</h1>
                <h3>Search pokemon by ID as in pokedex</h3>
                <form onSubmit={this.props.getPokemon} className="search-bar">
                    <input type="text" name="pokemonid" className="search"  placeholder="Search by using ID (from 1 to maybe 800)"></input>
                    <button>Search</button>

                </form>
                <h1>Pokemon Card</h1>
                <div className="Pokemon-info">
                    
                <div className="poke-container"> <img src={this.props.pokemon_image} alt="images"></img></div>
                  <div> <p className="name"> {this.props.pokemon_name}</p></div>
                  <div><p className="type">Type: {this.props.pokemon_type}</p> </div>
                </div>
            </div>
        )
    }
}

export default Pokemon;