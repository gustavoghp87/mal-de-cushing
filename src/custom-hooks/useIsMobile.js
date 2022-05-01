import { useEffect, useState } from 'react'

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)
    
    useEffect(() => {
        const update = () => {
            setTimeout(() => {
                setIsMobile(window.innerWidth < 1000)
                update()
            }, 2000)
        }
        update()
    }, [])

    return isMobile
}
