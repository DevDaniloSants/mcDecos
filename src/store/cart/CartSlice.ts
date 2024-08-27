import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import CartProducts from '../../types/cartProducts.types'
import Product from '../../types/product.types'
import { RootState } from '../store'

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
        toggleCart(state) {
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
        removeProduct(state, action: PayloadAction<string>) {
            const productId = action.payload

            state.products = state.products.filter(
                (item) => item.id !== productId
            )
        },
        increaseProductQuantity(state, action: PayloadAction<string>) {
            const productId = action.payload

            state.products = state.products.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        },
        decreaseProductQuantity(state, action: PayloadAction<string>) {
            const productId = action.payload

            state.products = state.products
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        },
        clearProducts(state) {
            state.products = []
        },
    },
})

export const selectProductTotalPrice = (state: RootState) => {
    return state.cartReducer.products.reduce((acc, currentValue) => {
        return acc + currentValue.price * currentValue.quantity
    }, 0)
}

export const selectProductsQuantity = (state: RootState) => {
    return state.cartReducer.products.reduce((acc, currentProduct) => {
        return acc + currentProduct.quantity
    }, 0)
}

export const {
    toggleCart,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
    clearProducts,
} = cartSlice.actions

export default cartSlice.reducer
