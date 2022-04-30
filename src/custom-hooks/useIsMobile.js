import { useEffect, useState } from 'react'

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)

    const adjustIsMobile = () => {
        setTimeout(() => {
            const isMobile1 = window.innerWidth < 1000
            if (isMobile1 !== isMobile) setIsMobile(isMobile1)
            adjustIsMobile()
        }, 2000)
    }

    useEffect(() => {
        adjustIsMobile()
    }, [])


    return isMobile
}