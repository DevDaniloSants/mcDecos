import { configureStore, type Action, type ThunkAction } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './root-reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer'],
}

const persistedReducer: typeof rootReducer = persistReducer(
    persistConfig,
    rootReducer
)

export const store = configureStore({
    reducer: persistedReducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    })
}

export const persistedStore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>
