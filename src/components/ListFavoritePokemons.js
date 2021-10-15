import React from 'react'
import PokemonCard from './PokemonCard';
import {useSelector} from 'react-redux';

const ListFavoritePokemons = (props) => {
   console.log('fav ones')
   const ownedCards = useSelector(state => state.ownedCards)
   const ownedFavs = ownedCards.filter(card => card.fav === true)
   
   return (
      <div className="app-container">
      <h2>Favorite Pokemons</h2>
      <div className="pokemon-container">
         <div className="all-container">
            { ownedFavs.map((pokemon) => 
               <PokemonCard
                  id = {pokemon.id}
                  name = {pokemon.name}
                  image = {pokemon.image}
                  type = {pokemon.type}
                  key = {pokemon.key}
                  tab = {"favs"}
               />
            )} 
         </div>
      </div>
      </div>
   );
}
 
export default ListFavoritePokemons;