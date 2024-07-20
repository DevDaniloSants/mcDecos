import { combineReducers } from '@reduxjs/toolkit'

import categoryReducer from './category/CategorySlice'
import cartReducer from './cart/CartSlice'

const rootReducer = combineReducers({
    categoryReducer,
    cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
