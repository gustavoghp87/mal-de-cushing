import { useState } from 'react'

export const useShowWidgets = () => {
    const [scroll, setScroll] = useState(window.scrollY)
    const [showWidgets, setShowWidgets] = useState(true)

    document.addEventListener('scroll', () => {
        if (window.innerWidth < 350) setShowWidgets(false)
        else {
            const windowScroll = window.scrollY
            setShowWidgets(windowScroll <= scroll)
            setScroll(windowScroll)
        }
    })

    return showWidgets
}
