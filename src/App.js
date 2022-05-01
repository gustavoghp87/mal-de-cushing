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
    const currentWidth = window.innerWidth
    const setIsDarkModeHandler = newState => setIsDarkMode(newState)
    const setShowIndexHandler = newState => setShowIndex(newState)

    document.getElementsByTagName('body')[0].addEventListener('click', () => {
        if (currentWidth !== window.innerWidth) setTimeout(() => window.location.reload(), 500)
    })

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
                <div className={'d-none'}>
                    <LanguageBtn
                        isEnglish={isEnglish}
                        setIsEnglish={setIsEnglish}
                    />
                </div>

                <Title
                    isEnglish={isEnglish}
                    isMobile={isMobile}
                />

                {!isEnglish && <Spanish />}

                {isEnglish && <English />}

                <LinkToDocuments />

                <ShareBtns />

                <VideoIFrame isMobile={isMobile} />

                
            </div>

                <IndexModal
                    isEnglish={isEnglish}
                    isDarkMode={isDarkMode}
                    showIndex={showIndex}
                    setShowIndexHandler={setShowIndexHandler}
                />
            <Footer />

            {showWidgets    &&
                <div
                    className={`${isMobile ? 'w-100' : ''} ${isMobile && isDarkMode ? 'bg-dark' : 'bg-secondary'}`}
                    style={{ position: isMobile ? 'fixed' : '', top: isMobile ? 0 : '' }}
                >
                    <div
                        className={`${isMobile ? 'row d-flex align-items-center' : ''}`}
                        style={{ justifyContent: isMobile ? 'space-evenly' : '' }}
                    >

                    <DarkModeButton
                        isEnglish={isEnglish}
                        isMobile={isMobile}
                        isDarkMode={isDarkMode}
                        setIsDarkModeHandler={setIsDarkModeHandler}
                    />

                    <IndexButton
                        isEnglish={isEnglish}
                        isMobile={isMobile}
                        isDarkMode={isDarkMode}
                        setShowIndexHandler={setShowIndexHandler}
                    />

                    <SizeButton
                        isEnglish={isEnglish}
                        isMobile={isMobile}
                        isDarkMode={isDarkMode}
                    />
                </div>
                </div>
            }

        </div>
    )
}
