import React from 'react'
import PokemonCard from './PokemonCard';
import {useSelector} from 'react-redux';
import { nanoid } from 'nanoid';


const ListCatchedPokemons = (tab) => {
   console.log('catched ones')
   const ownedCards = useSelector(state => state.ownedCards)
   
   return (
      <div className="app-container">
      <h2>Your Pokemons!</h2>
      <div className="pokemon-container">
         <div className="all-container">
            { ownedCards.map((pokemon) => 
               <PokemonCard
                  id = {pokemon.id}
                  name = {pokemon.name}
                  image = {pokemon.image}
                  type = {pokemon.type}
                  no = {pokemon.key}
                  tab = {"catched"}
                  key = {nanoid()}
               />
            )} 
         </div>
      </div>
      </div>
   );
}
 
export default ListCatchedPokemons;