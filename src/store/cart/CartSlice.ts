import { createSlice } from '@reduxjs/toolkit'

import CartProducts from '../../types/cartProducts.types'

export interface InitialState {
    isVisible: boolean
    products: CartProducts[]
}

const initialState: InitialState = {
    isVisible: false,
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toogleCart(state) {
            state.isVisible = !state.isVisible
        },
    },
})

export default cartSlice.reducer
