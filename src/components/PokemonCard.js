import React, {useState} from "react";
import { catchCard, favCard, unfavCard, releaseCard } from '../reducers/ownedCardSlice';
import {useDispatch} from 'react-redux';
import axios from "axios";

const PokemonCard = ({id, name, image, type, tab}) => {
   const [occludeImages, setOccludeImages] = useState("");
   const [occludeDetails, setOccludeDetails] = useState(" no-content");
   const [details, setDetails] = useState("");
   const dispatch = useDispatch();
   const loadUrl = "https://pokeapi.co/api/v2/pokemon-species/"

   // {id, name, image, type} = this.props;
   const getDetails = async () => {
      const res = await axios.get(loadUrl+id);
      const pokeResults = res.data['flavor_text_entries'];
      console.log('pokeresults', pokeResults)
      let allText = "";
      let text = "";
      for(let i=1; i<12; i++){
         text = pokeResults[i].flavor_text;
         if(text !== pokeResults[i-1].flavor_text) {
            text = text.replace('\f','');
            text = text.replace('\n','');
            console.log(text)
            allText += " " + text;
            setDetails(allText);
         }
      }
   }


   const handleClick = () => {
      getDetails();
      setOccludeImages(" no-content");
      setOccludeDetails("");
   }

   const handleBack = () => {
      setOccludeImages("");
      setOccludeDetails(" no-content");
   }

   const handleButton = (theText) => {
      if (theText === 'Release') {
         dispatch(releaseCard({
            id
         }))
      } else if(theText=== "Fav") {
         console.log('fav button')
         dispatch(favCard({
            id
         }))
      } else if(theText === "Unfav") {
         dispatch(unfavCard({
            id
         }))
      } else {
         console.log('catch button')
         dispatch(catchCard({
            id,
            image,
            name,
            type

         }))
      }
   }

      const style = `thumb-container ${type}`;
      let releaseTexts = [];
      const buttonTexts = {
         catched: ['Release', 'Fav'],
         fav: ['Unfav'],
         list: ['Catch']
      }
      
      if (tab === 'catched'){
         releaseTexts = buttonTexts.catched;
      } else if(tab === 'favs') {
         releaseTexts = buttonTexts.fav;
      } else {
         releaseTexts = buttonTexts.list;
      }

      return (
      <div className="whole-card">
        <div className={style + occludeImages + " card"}>
            <div onClick={() => handleClick()}>
            <div className="number">
                <small>#{id}</small>
            </div>
               <img src={image} alt={name}/>
            <div>
            
            </div>
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
            </div>
            {
               releaseTexts.map(theText => 
                  <button onClick={() => handleButton(theText)} className="btn">{theText} </button>
            )}
        </div>
        <div onClick={() => handleBack()} className={style + occludeDetails + " details"}>
            <h3>{name}</h3>
            <small> 
               <h3>Type:</h3>
              {type}
            </small>
            <small>{details}</small>
        </div>
      </div>
      );
}
 
export default PokemonCard;