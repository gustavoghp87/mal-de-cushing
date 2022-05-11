import { useSelector } from 'react-redux'
import styles from '../css/styles.module.css'

export const VideoIFrame = () => {

    const { isEnglish, isMobile } = useSelector(state => state)
    const url = "https://www.youtube.com/watch?v=5sj8dSXmPn4"
    const urlEmbed = "https://www.youtube.com/embed/5sj8dSXmPn4"

    return (
    <>
        <div className={'text-center mb-4'} style={{ marginTop: '100px' }}>
            <iframe src={urlEmbed}
                width={isMobile ? "98%" : "560"}
                height={isMobile ? "380": "315"} 
                title={"Ally"}
                frameBorder={"0"}
                allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;${isMobile ? ' fullscreen;' : ' fullscreen;'}`}    // ' fullscreen;'
                allowsfullscreen={isMobile ? 'false' : 'true'}>
            </iframe>

        </div>

        <div className={`${styles.card} d-block m-auto text-center`}
            style={{ cursor: 'pointer' }}
            onClick={() => window.open(url, '_blank').focus()}
        >
            {isEnglish ? "Watch on YouTube" : "Ver en YouTube"}
        </div>
    </>
    )
}
