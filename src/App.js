import { useEffect, useState } from 'react'
import styles from './css/Home.module.css'
import English from './English'
import Spanish from './Spanish'
import { Title } from './common/Title'
import { Footer } from './common/Footer'
import { DarkModeButton } from './common/DarkModeButton'
import { IndexButton } from './common/IndexButton'
import { IndexModal } from './common/IndexModal'
import { SizeButton } from './common/SizeButton'
import { ArrowBarRight } from 'react-bootstrap-icons'
import { useIsMobile } from './custom-hooks/useIsMobile'
import { useShowWidgets } from './custom-hooks/useShowWidgets'

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

            <div className={''}
                style={{
                    minHeight: '100vh',
                    marginInline: isMobile ? '7%' : '20%',
                    // padding: '1rem 0 4rem 0',
                    // flex: 1,
                    // display: 'flex',
                    // flexDirection: 'column',
                    // justifyContent: 'center'
                }}
            >

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className={styles.card + ' d-block m-auto'} onClick={() => setIsEnglish(!isEnglish)}>
                    <h2 className={'mb-0 text-center'} style={{ width: '250px' }}>
                        {isEnglish ? "Versión en Español" : "English version"}
                        &nbsp; <ArrowBarRight />
                    </h2>
                </div>

                <br/>
                <br/>

                <Title
                    isEnglish={isEnglish}
                    isMobile={isMobile}
                />

                <br/>

                {!isEnglish && <Spanish />}

                {isEnglish && <English />}


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
                    isMobile={isMobile}
                    isDarkMode={isDarkMode}
                    showIndex={showIndex}
                    setShowIndexHandler={setShowIndexHandler}
                />
                
            </div>

            <Footer />

        </div>
    )
}
