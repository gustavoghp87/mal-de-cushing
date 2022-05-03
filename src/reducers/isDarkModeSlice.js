import { createSlice } from '@reduxjs/toolkit'

const initialState = window.localStorage.getItem('isDarkModeCushing') === 'false' || true

export const isDarkModeSlice = createSlice({
    name: 'isDarkMode',
    initialState: { isDarkMode: initialState },
    reducers: {
        changeisDarkModeReducer: (state, action) => {
            window.localStorage.setItem('isDarkModeCushing', (!state.isDarkMode).toString())
            state = { isDarkMode: !state.isDarkMode }
            return state
        }
    }
})

export const { changeisDarkModeReducer } = isDarkModeSlice.actions
