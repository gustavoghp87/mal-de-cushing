import { createSlice } from '@reduxjs/toolkit'

const initialState = window.localStorage.getItem('isDarkModeCushing') === 'true'
console.log(initialState);

export const isDarkModeSlice = createSlice({
    name: 'isDarkMode',
    initialState: initialState,
    reducers: {
        changeisDarkModeReducer: (state) => {
            window.localStorage.setItem('isDarkModeCushing', (!state).toString())
            state = !state
            return state
        }
    }
})

export const { changeisDarkModeReducer } = isDarkModeSlice.actions
