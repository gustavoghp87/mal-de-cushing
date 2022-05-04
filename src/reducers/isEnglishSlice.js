import { createSlice } from '@reduxjs/toolkit'

const initialState = window.localStorage.getItem('isEnglishCushing') === 'true'

export const isEnglishSlice = createSlice({
    name: 'isEnglish',
    initialState: initialState,
    reducers: {
        changeIsEnglishReducer: (state) => {
            window.localStorage.setItem('isEnglishCushing', (!state).toString())
            state = !state
            return state
        }
    }
})

export const { changeIsEnglishReducer } = isEnglishSlice.actions
