import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const showIndexSlice = createSlice({
    name: 'showIndex',
    initialState: initialState,
    reducers: {
        changeShowIndexReducer: (state, action) => {
            state = action?.payload
            return state
        }
    }
})

export const { changeShowIndexReducer } = showIndexSlice.actions
