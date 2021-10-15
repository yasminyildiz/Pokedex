import React from "react";
import axios from "axios";
class PokemonDetails extends React.Component {
   
   loadUrl = "https://pokeapi.co/api/v2/pokemon-species"
   textDetails = '';

   // {id, name, image, type} = this.props;
   getPokemons = async () => {
      const res = await axios.get(this.loadUrl);
      const pokeResults = res.data['flavor_text_entries'];

      pokeResults.forEach(async (text) => {
         this.textDetails += ' ' + text;
      })
   }

   render() { 
      return <div>{this.textDetails}</div>;
   }
}
 
export default PokemonDetails;