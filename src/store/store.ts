import { configureStore, type Action, type ThunkAction } from '@reduxjs/toolkit'

import rootReducer from './root-reducer'

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>
