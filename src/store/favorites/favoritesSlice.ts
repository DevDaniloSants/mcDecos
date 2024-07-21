import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Favorites from '../../types/favoriteProducts.types'
import { RootState } from '../store'

export interface InitialState {
    isLoading: boolean
    favorites: Favorites[]
}

const initialState: InitialState = {
    isLoading: false,
    favorites: [],
}

const favoritesSlice = createSlice({
    name: 'favotires',
    initialState: initialState,
    reducers: {
        addFavotires(state, action: PayloadAction<Favorites>) {
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

            state.favorites = [
                ...state.favorites,
                { ...product, favorite: true },
            ]
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
