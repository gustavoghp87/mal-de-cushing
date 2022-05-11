import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { LanguageBtn } from './subcomponents/LanguageBtn'
import { Title } from './subcomponents/Title'
import { Intro } from './content/Intro'
import { Body } from './content/Body'
import { Conclusions } from './content/Conclusions'
import { LinkToDocuments } from './subcomponents/LinkToDocuments'
import { VideoIFrame } from './subcomponents/VideoIFrame'
import { ShareBtns } from './subcomponents/ShareBtns'
import { Footer } from './subcomponents/Footer'
import { IndexModal } from './subcomponents/IndexModal'
import { Widgets } from './subcomponents/Widgets'
import { Hr } from './subcomponents/Hr'
import { DIV } from './css/styles'

export const App = () => {

    const { isDarkMode } = useSelector(state => state)
    const windowWidthSize = window.innerWidth

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            e.preventDefault()
            if (window.innerWidth !== windowWidthSize) setTimeout(() => window.location.reload(), 200)
        })
    }, [windowWidthSize])

    return (
        <div className={`w-100 p-0 ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}>

            <DIV>

                <LanguageBtn />

                <Title />

                <Intro />

                <Hr />

                <Body />

                <Hr />

                <Conclusions />

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
