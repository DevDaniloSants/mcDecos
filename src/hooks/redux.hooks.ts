import { useSelector } from 'react-redux'
import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

import { RootState } from '../store/store'

export const useAppSelector = useSelector.withTypes<RootState>()

export const createAppSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})
