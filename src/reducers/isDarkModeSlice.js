import { createSlice } from '@reduxjs/toolkit'

const initialState = window.localStorage.getItem('isDarkModeCushing') !== 'false'

export const isDarkModeSlice = createSlice({
    name: 'isDarkMode',
    initialState: initialState,
    reducers: {
        changeIsDarkModeReducer: (state) => {
            window.localStorage.setItem('isDarkModeCushing', (!state).toString())
            state = !state
            return state
        }
    }
})

export const { changeIsDarkModeReducer } = isDarkModeSlice.actions
