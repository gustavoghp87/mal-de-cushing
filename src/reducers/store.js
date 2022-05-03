import { configureStore } from '@reduxjs/toolkit'
import { isEnglishSlice } from './isEnglishSlice'
import { isDarkModeSlice } from './isDarkModeSlice'
import { isMobileSlice } from './isMobileSlice'
import { showIndexSlice } from './showIndexSlice'

export const store = configureStore({
    reducer: {
        isEnglish: isEnglishSlice.reducer,
        isDarkMode: isDarkModeSlice.reducer,
        isMobile: isMobileSlice.reducer,
        showIndex: showIndexSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})
