import { useSelector } from 'react-redux'
import English from './English'
import Spanish from './Spanish'
import { SpanishIntro } from './SpanishIntro'
import { EnglishIntro } from './EnglishIntro'
import { Title } from './subcomponents/Title'
import { Footer } from './subcomponents/Footer'
import { IndexModal } from './subcomponents/IndexModal'
import { LinkToDocuments } from './subcomponents/LinkToDocuments'
import { VideoIFrame } from './subcomponents/VideoIFrame'
import { LanguageBtn } from './subcomponents/LanguageBtn'
import { ShareBtns } from './subcomponents/ShareBtns'
import { Widgets } from './subcomponents/Widgets'
import { Hr } from './subcomponents/Hr'

export const App = () => {

    const { isDarkMode, isEnglish, isMobile } = useSelector(state => state)
    const currentWidth = window.innerWidth

    window.addEventListener('resize', () => {
        if (currentWidth !== window.innerWidth) setTimeout(() => window.location.reload(), 200)
    })

    return (
        <div className={`p-0 ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}>

            <div
                style={{
                    minHeight: '100vh',
                    marginInline: isMobile ? '4%' : '20%',
                    marginBottom: '120px'
                }}
            >

                <LanguageBtn />

                <Title />

                {isEnglish ? <EnglishIntro /> : <SpanishIntro />}

                <Hr />

                {isEnglish ? <English /> : <Spanish />}

                <Hr />

                <LinkToDocuments />

                <Hr />
                
                <VideoIFrame />
                
                <Hr />

                <ShareBtns />
                
            </div>

            <Footer />

            <IndexModal />

            <Widgets />

        </div>
    )
}
