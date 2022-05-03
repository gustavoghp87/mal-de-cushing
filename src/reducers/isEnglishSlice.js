import { createSlice } from '@reduxjs/toolkit'

const initialState = window.localStorage.getItem('isEnglishCushing') === 'true' || false

export const isEnglishSlice = createSlice({
    name: 'isEnglish',
    initialState: { isEnglish: initialState },
    reducers: {
        changeIsEnglishReducer: (state, action) => {
            window.localStorage.setItem('isEnglishCushing', (!state.isEnglish).toString())
            state = { isEnglish: !state.isEnglish }
            return state
        }
    }
})

export const { changeIsEnglishReducer } = isEnglishSlice.actions
