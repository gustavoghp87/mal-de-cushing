import { useEffect, useState } from 'react'
import English from './English'
import Spanish from './Spanish'
import { Title } from './subcomponents/Title'
import { Footer } from './subcomponents/Footer'
import { DarkModeButton } from './subcomponents/DarkModeButton'
import { IndexButton } from './subcomponents/IndexButton'
import { IndexModal } from './subcomponents/IndexModal'
import { SizeButton } from './subcomponents/SizeButton'
import { LinkToDocuments } from './subcomponents/LinkToDocuments'
import { VideoIFrame } from './subcomponents/VideoIFrame'
import { LanguageBtn } from './subcomponents/LanguageBtn'
import { useIsMobile } from './custom-hooks/useIsMobile'
import { useShowWidgets } from './custom-hooks/useShowWidgets'
import { ShareBtns } from './subcomponents/ShareBtns'

export const App = () => {
    const [isEnglish, setIsEnglish] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [showIndex, setShowIndex] = useState(false)
    const isMobile = useIsMobile()
    const showWidgets = useShowWidgets()
    const setIsDarkModeHandler = newState => setIsDarkMode(newState)
    const setShowIndexHandler = newState => setShowIndex(newState)

    const [innerWidthX, setInnerWidthX] = useState(window.innerWidth)
    
    const updateInnerWidthX = () => {
        setTimeout(() => {
            setInnerWidthX(window.innerWidth)
            updateInnerWidthX()
        }, 2000)
    }
    
    useEffect(() => {
        if (window.localStorage.getItem('darkModeCushing') === "false")
        setIsDarkMode(false)
        updateInnerWidthX()
    }, [])

    return (
        <div className={`p-0 ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`} style={{ width: innerWidthX }}>

            <div
                style={{
                    minHeight: '100vh',
                    marginInline: isMobile ? '7%' : '20%',
                    marginBottom: '120px'
                }}
            >

                <LanguageBtn
                    isEnglish={isEnglish}
                    setIsEnglish={setIsEnglish}
                />

                <Title
                    isEnglish={isEnglish}
                    isMobile={isMobile}
                />

                {!isEnglish && <Spanish />}

                {isEnglish && <English />}

                <LinkToDocuments />

                <VideoIFrame isMobile={isMobile} />

                <ShareBtns />

                {showWidgets &&
                    <>
                        <IndexButton
                            isEnglish={isEnglish}
                            isMobile={isMobile}
                            isDarkMode={isDarkMode}
                            setShowIndexHandler={setShowIndexHandler}
                        />

                        <DarkModeButton
                            isEnglish={isEnglish}
                            isMobile={isMobile}
                            isDarkMode={isDarkMode}
                            setIsDarkModeHandler={setIsDarkModeHandler}
                        />

                        <SizeButton
                            isEnglish={isEnglish}
                            isMobile={isMobile}
                            isDarkMode={isDarkMode}
                        />
                    </>
                }

                <IndexModal
                    isEnglish={isEnglish}
                    isDarkMode={isDarkMode}
                    showIndex={showIndex}
                    setShowIndexHandler={setShowIndexHandler}
                />
                
            </div>

            <Footer />

        </div>
    )
}
