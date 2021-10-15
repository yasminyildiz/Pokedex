import {configureStore} from '@reduxjs/toolkit'
import ownedCardSlice from './ownedCardSlice'

export default configureStore({
   reducer: {
      ownedCards: ownedCardSlice,
   },
});