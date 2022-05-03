import { useState } from 'react'

export const useShowWidgets = () => {
    const [scroll, setScroll] = useState(window.scrollY)
    const [showWidgets, setShowWidgets] = useState(true)

    document.addEventListener('scroll', () => {
        const windowScroll = window.scrollY
        if (scroll < windowScroll) setShowWidgets(false)
        else setShowWidgets(true)
        setScroll(windowScroll)
    })

    return showWidgets
}
