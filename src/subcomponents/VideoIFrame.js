import { PropTypes } from 'prop-types'

export const VideoIFrame = ({ isMobile }) => {

    return (
        <div className={'text-center'} style={{ marginTop: '100px' }}>
            
            <iframe src={"https://www.youtube.com/embed/5sj8dSXmPn4"}
                width={isMobile ? "98%" : "560"}
                height={isMobile ? "380": "315"} 
                title={"Ally"}
                frameBorder={"0"}
                allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"}
                allowsfullscreen={'true'}>
            </iframe>
            
        </div>
    )
}

VideoIFrame.propTypes = {
    isMobile: PropTypes.bool.isRequired
}
