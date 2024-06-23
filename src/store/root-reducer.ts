import { combineReducers } from '@reduxjs/toolkit'

import categoryReducer from './category/CategorySlice'

const rootReducer = combineReducers({
    categoryReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
