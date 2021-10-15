import React from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard'
import { nanoid } from 'nanoid';

class ListPokemons extends React.Component {
   
   state = {
      pokemons: [],
      loadUrl: "https://pokeapi.co/api/v2/pokemon?limit=20"
   }
   
   getPokemons = async () => {
      const res = await axios.get(this.state.loadUrl);
      const pokeResults = res.data['results'];
      this.setState({loadUrl: res.data.next});


      pokeResults.forEach(async (pokemon) => {
         const resPokemon = await axios.get(pokemon.url);
         const pokemons = [...this.state.pokemons, resPokemon.data];
         this.setState({pokemons})  
      })
   }

   async componentDidMount() {
      this.getPokemons()
    }
    
   render() { 
      console.log('list all')
         return (
            <div className="app-container">
            <h2>Pokemons</h2>
            <div className="pokemon-container">
              <div className="all-container">
                { this.state.pokemons.map((pokemon) => 
                  <PokemonCard
                     id = {pokemon.id}
                     name = {pokemon.name}
                     image = {pokemon.sprites.other.dream_world.front_default}
                     type = {pokemon.types[0].type.name}
                     key = {nanoid()}
                  />
                )} 
              </div>
              <button className="load-more" onClick={() => this.getPokemons()}>Load more</button>
            </div>
          </div>
         );
      
      
   }
}
 
export default ListPokemons;