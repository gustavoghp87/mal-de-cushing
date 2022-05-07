import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { English } from './content/English'
import { Spanish } from './content/Spanish'
import { SpanishIntro } from './content/SpanishIntro'
import { EnglishIntro } from './content/EnglishIntro'
import { EnglishConclusions } from './content/EnglishConclusions'
import { SpanishConclusions } from './content/SpanishConclusions'
import { Title } from './subcomponents/Title'
import { Footer } from './subcomponents/Footer'
import { IndexModal } from './subcomponents/IndexModal'
import { LinkToDocuments } from './subcomponents/LinkToDocuments'
import { VideoIFrame } from './subcomponents/VideoIFrame'
import { LanguageBtn } from './subcomponents/LanguageBtn'
import { ShareBtns } from './subcomponents/ShareBtns'
import { Widgets } from './subcomponents/Widgets'
import { Hr } from './subcomponents/Hr'
import { DIV } from './css/styles'

export const App = () => {

    const { isDarkMode, isEnglish } = useSelector(state => state)

    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log("resize", window.innerWidth)
            // setTimeout(() => window.location.reload(), 200) })
        })
        const date = new Date()
        console.log(date.getMinutes() + ":" + date.getSeconds());
    }, [])

    return (
        <div className={`w-100 p-0 ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}>

            <DIV>

                <LanguageBtn />

                <Title />

                {isEnglish ? <EnglishIntro /> : <SpanishIntro />}

                <Hr />

                {isEnglish ? <English /> : <Spanish />}

                <Hr />

                {isEnglish ? <EnglishConclusions /> : <SpanishConclusions />}

                <Hr />

                <LinkToDocuments />

                <Hr />
                
                <VideoIFrame />
                
                <Hr />

                <ShareBtns />
                
            </DIV>

            <Footer />

            <IndexModal />

            <Widgets />

        </div>
    )
}
