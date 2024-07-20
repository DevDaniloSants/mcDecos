import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import CartProducts from '../../types/cartProducts.types'
import Product from '../../types/product.types'

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
        addProduct(state, action: PayloadAction<Product>) {
            const product = action.payload

            const productAlreadyInCart = state.products.some(
                (item) => item.id === product.id
            )

            if (productAlreadyInCart) {
                state.products.map((item) => {
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                })
                return
            }
            state.products = [...state.products, { ...product, quantity: +1 }]
        },
    },
})

export const { toogleCart, addProduct } = cartSlice.actions

export default cartSlice.reducer
