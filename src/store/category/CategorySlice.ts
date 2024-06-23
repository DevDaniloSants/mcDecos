import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { collection, getDocs } from 'firebase/firestore'

import Category from '../../types/category.types'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const categoriesFromFirestore: Category[] = []

        const querySnapshot = await getDocs(
            collection(db, 'categories').withConverter(categoryConverter)
        )

        querySnapshot.forEach((doc) => {
            categoriesFromFirestore.push(doc.data())
        })

        return categoriesFromFirestore
    }
)

export interface InitialState {
    isLoading: boolean
    categories: Category[]
}

const initialState: InitialState = {
    isLoading: false,
    categories: [],
}

const categorySlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true
        }),
            builder.addCase(fetchCategories.fulfilled, (state, action) => {
                ;(state.isLoading = false), (state.categories = action.payload)
            }),
            builder.addCase(fetchCategories.rejected, (state) => {
                state.isLoading = false
            })
    },
})

export default categorySlice.reducer
