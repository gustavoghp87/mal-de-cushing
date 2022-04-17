import { useEffect, useState } from 'react'
import styles from './css/Home.module.css'
import English from './English'
import Spanish from './Spanish'
import { DarkModeButton } from './common/DarkModeButton'
import { IndexButton } from './common/IndexButton'
import { SizeButton } from './common/SizeButton'
import { ArrowBarRight } from 'react-bootstrap-icons'

export const App = () => {
    const [isEnglish, setIsEnglish] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [showIndex, setShowIndex] = useState(false)
    const [scroll, setScroll] = useState(window.scrollY)
    const [scrollDown, setScrollDown] = useState(true)

    const setIsDarkModeHandler = newState => setIsDarkMode(newState)
    const setShowIndexHandler = newState => setShowIndex(newState)
    
    let isMobile = window.innerWidth < 1000
    const adjustIsMobile = () => {
        setTimeout(() => {
            const isMobile1 = window.innerWidth < 1000
            if (isMobile1 !== isMobile) isMobile = isMobile1
            adjustIsMobile()
        }, 2000)
    }
    adjustIsMobile()

    document.addEventListener('scroll', () => {
        const windowScroll = window.scrollY
        if (scroll < windowScroll) setScrollDown(false)
        else setScrollDown(true)
        setScroll(windowScroll)
    })
    
    useEffect(() => {
        if (window.localStorage.getItem('darkModeCushing') === "false") setIsDarkMode(false)
        return () => setScrollDown(true)
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

                <div className={''}
                    style={{
                        margin: 0,
                        lineHeight: 1.15,
                        fontSize: isMobile ? '2.5rem ' : '3.4rem',
                        textAlign: 'center'
                    }}
                >
                    {isEnglish ?
                        "Cushing's Desease in dogs and trilostane & mitotane treatments:"
                        :
                        "Mal de Cushing en perros y tratamientos con trilostano y mitotano:"
                    }
                    <br/>
                    {isEnglish ?
                        "Ally's case"
                        :
                        "El caso de Ally"
                    }
                </div>

                <br/>

                {scrollDown &&
                <>
                    <IndexButton
                        isEnglish={isEnglish}
                        isMobile={isMobile}
                        isDarkMode={isDarkMode}
                        showIndex={showIndex}
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

                {!isEnglish && <Spanish />}

                {isEnglish && <English />}
                
            </div>

            <footer className={styles.footer}>
                <p> Se aceptan donaciones en Bitcoin para pagar el dominio: </p>

                <p> 1AtHe23t5zHWPS5wSYtDXz2fFjZqB9FgHN </p>

                <a
                    href={"https://www.maldecushing.com"}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                >
                    maldecushing.com
                    <span className={styles.logo}>
                        {/* <Image src="/vercel.svg" alt="Logo" width={72} height={16} /> */}
                    </span>
                </a>
            </footer>
        </div>
    )
}
