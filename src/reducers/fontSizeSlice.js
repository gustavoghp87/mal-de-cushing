import { createSlice } from '@reduxjs/toolkit'

export const size0 = "1.1rem"
const size1 = "1.4rem"
export const size2 = "1.7rem"
export const fontSizeCushing = 'fontSizeCushing'

const initialState = window.localStorage.getItem('fontSizeCushing') ?? size0

export const fontSizeSlice = createSlice({
    name: 'fontSize',
    initialState: initialState,
    reducers: {
        changeFontSizeReducer: (state, action) => {
            if (action?.payload === "increase") {
                if (state === size0) state = size1
                else if (state === size1) state = size2
                else state = size0
            } else {
                if (state === size2) state = size1
                else if (state === size1) state = size0
                else state = size0
            }
            window.localStorage.setItem(fontSizeCushing, state)
            window.location.reload()
            return state
        }
    }
})

export const { changeFontSizeReducer } = fontSizeSlice.actions
