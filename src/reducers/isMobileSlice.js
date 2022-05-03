import { createSlice } from '@reduxjs/toolkit'

const initialState = window.innerWidth < 1000

export const isMobileSlice = createSlice({
    name: 'isMobile',
    initialState: { isMobile: initialState },
    reducers: {
        changeisMobileReducer: (state) => {
            state = { isMobile: window.innerWidth < 1000 }
            return state
        }
    }
})
