import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const ownedCardSlice = createSlice({
   name: "ownedCards",
   initialState: [
      {id: 4 ,image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg", name:"wartortle", type: 'grass', fav: false, key: nanoid()},
      {id: 10,image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg", name: "charmander", type:'fire' ,fav: false, key: nanoid()},
      {id: 8,image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg", name: "caterpie", type:'water' ,fav: true, key: nanoid()},
   ],

   reducers: {
      catchCard: (state, action) => {
         let isInside = false;
         
         state.forEach(card => {
            if(card.id === action.payload.id) {
               isInside = true;;
            } 
         })

         if (isInside === false) { // catch if there is not same pokemon that is already catched. come on... who wants another one anyway?
            const newOwnedCard = {
               id : action.payload.id,
               image: action.payload.image,
               name: action.payload.name,
               type: action.payload.type,
               fav: false,
               key: nanoid(),
            };
            state.push(newOwnedCard);
         }
  
      },

      favCard: (state, action) => {
         console.log('inside fav slice')
         state.forEach(card => {
            if(card.id ===  action.payload.id){
               console.log('faved')
               card.fav = true;
            } // might add already fav alert or smt
         return state;
         
         });
      },

      unfavCard: (state, action) => {
         console.log('inside unfav slice')
         state.forEach(card => {
            if(card.id ===  action.payload.id){
               console.log('unfaved')
               card.fav = false;
            } // might add already fav alert or smt
         return state;
         });
      },

      releaseCard: (state, action) => {
         return state.filter(card => card.id !== action.payload.id)
      }
   },
});

export const {
   catchCard,
   unfavCard,
   favCard,
   releaseCard,

} = ownedCardSlice.actions; 

export default ownedCardSlice.reducer;