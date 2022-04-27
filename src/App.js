import { useEffect, useState } from 'react'
import English from './English'
import Spanish from './Spanish'
import { Title } from './common/Title'
import { Footer } from './common/Footer'
import { DarkModeButton } from './common/DarkModeButton'
import { IndexButton } from './common/IndexButton'
import { IndexModal } from './common/IndexModal'
import { SizeButton } from './common/SizeButton'
import { LinkToDocuments } from './common/LinkToDocuments'
import { VideoIFrame } from './common/VideoIFrame'
import { LanguageBtn } from './common/LanguageBtn'
import { useIsMobile } from './custom-hooks/useIsMobile'
import { useShowWidgets } from './custom-hooks/useShowWidgets'
import { ShareBtns } from './common/ShareBtns'

export const App = () => {
    const [isEnglish, setIsEnglish] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [showIndex, setShowIndex] = useState(false)
    const isMobile = useIsMobile()
    const showWidgets = useShowWidgets()
    const setIsDarkModeHandler = newState => setIsDarkMode(newState)
    const setShowIndexHandler = newState => setShowIndex(newState)
    
    useEffect(() => {
        if (window.localStorage.getItem('darkModeCushing') === "false") setIsDarkMode(false)
    }, [])

    return (
        <div className={`p-0 ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}>

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
