import { combineReducers } from '@reduxjs/toolkit'

import categoryReducer from './category/CategorySlice'
import cartReducer from './cart/CartSlice'
import favoritesReducer from './favorites/favoritesSlice'

const rootReducer = combineReducers({
    categoryReducer,
    cartReducer,
    favoritesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
