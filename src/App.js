import { useEffect, useState } from 'react'
import styles from './css/Home.module.css'
import English from './English'
import Spanish from './Spanish'
import { DarkModeButton } from './common/DarkModeButton'
import { IndexButton } from './common/IndexButton'
import { SizeButton } from './common/SizeButton'


export const App = () => {
    const [isEnglish, setIsEnglish] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [showIndex, setShowIndex] = useState(false)
    const [scroll, setScroll] = useState(window.scrollY)
    const [scrollDown, setScrollDown] = useState(true)

    const setIsDarkModeHandler = newState => setIsDarkMode(newState)
    const setShowIndexHandler = newState => setShowIndex(newState)

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
        <div className={`${styles.container} ${isDarkMode ? 'bg-dark text-white' : ''}`}>

            <main className={styles.main}>

                <br/>

                <div className={styles.card + ' d-block m-auto'} onClick={() => setIsEnglish(!isEnglish)}>
                    <h2 className={'mb-0'}>
                        {isEnglish ? "Versión en Español" : "English version"}
                        &nbsp;&rarr;
                    </h2>
                </div>

                <br/>
                <br/>

                <h1 className={styles.title}>
                    {isEnglish ?
                        "Cushing's Desease in dogs and trilostane & mitotane treatments:"
                        :
                        "Mal de Cushing en perros y tratamientos con trilostano y mitotano:"
                    }
                </h1>

                <h1 className={styles.title} >
                    {isEnglish ?
                        "Ally's case"
                        :
                        "El caso de Ally"
                    }
                </h1>

                <br/>

                {!isEnglish && <Spanish />}

                {isEnglish && <English />}

                {scrollDown &&
                <>
                    <DarkModeButton
                        isDarkMode={isDarkMode}
                        setIsDarkModeHandler={setIsDarkModeHandler}
                        isEnglish={isEnglish}
                    />

                    <IndexButton
                        isDarkMode={isDarkMode}
                        showIndex={showIndex}
                        setShowIndexHandler={setShowIndexHandler}
                        isEnglish={isEnglish}
                    />

                    <SizeButton
                        isDarkMode={isDarkMode}
                        showIndex={showIndex}
                        setShowIndexHandler={setShowIndexHandler}
                        isEnglish={isEnglish}
                    />
                </>
                }

                
            </main>

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
