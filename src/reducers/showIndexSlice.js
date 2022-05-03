import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const showIndexSlice = createSlice({
    name: 'showIndex',
    initialState: { showIndex: initialState },
    reducers: {
        changeShowIndexReducer: (state, action) => {
            console.log(action.payload);
            state = { showIndex: action.payload }
            return state
        }
    }
})

export const { changeShowIndexReducer } = showIndexSlice.actions
