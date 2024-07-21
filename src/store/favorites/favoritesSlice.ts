import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import Product from '../../types/product.types'

export interface InitialState {
    isLoading: boolean
    favorites: Product[]
}

const initialState: InitialState = {
    isLoading: false,
    favorites: [],
}

const favoritesSlice = createSlice({
    name: 'favotires',
    initialState: initialState,
    reducers: {
        addFavotires(state, action: PayloadAction<Product>) {
            const product = action.payload

            const productIsAreadyInFavorites = state.favorites.some(
                (item) => item.id === product.id
            )

            if (productIsAreadyInFavorites) {
                state.favorites = state.favorites.filter(
                    (item) => item.id !== product.id
                )

                return
            }

            state.favorites = [...state.favorites, product]
        },
    },
})

export const selectFavoritesTotal = (state: RootState) => {
    return state.favoritesReducer.favorites.reduce((acc) => {
        return acc + 1
    }, 0)
}

export const { addFavotires } = favoritesSlice.actions

export default favoritesSlice.reducer
