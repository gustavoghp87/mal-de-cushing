import { PropTypes } from 'prop-types'

export const VideoIFrame = ({ isMobile }) => {

    return (
        <div className={'text-center'} style={{ marginTop: '100px' }}>
            <hr className={'bg-white'} style={{ marginBottom: '80px' }} />
            <iframe src={"https://www.youtube.com/embed/DFGSAtTu7rU"}
                width={isMobile ? "98%" : "560"}
                height={"315"} 
                title={"Ally"}
                frameBorder={"0"}
                allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
                allowsfullscreen={'true'}>
            </iframe>
        </div>
    )
}

VideoIFrame.propTypes = {
    isMobile: PropTypes.bool.isRequired
}
