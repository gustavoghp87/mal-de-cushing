import { createSlice } from '@reduxjs/toolkit'

const initialState = window.innerWidth < 1000

export const isMobileSlice = createSlice({
    name: 'isMobile',
    initialState: initialState,
    reducers: {
        changeisMobileReducer: (state) => {
            state = window.innerWidth < 1000
            return state
        }
    }
})
