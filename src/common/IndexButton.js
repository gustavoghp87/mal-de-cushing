import styles from '../css/Home.module.css'
import { PropTypes } from 'prop-types'

export const IndexButton = ({ isEnglish, isMobile, isDarkMode, setShowIndexHandler }) => {

    return (
    <>
        <div
            className={`${styles.card} ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                marginLeft: '3%',
                cursor: 'pointer',
                padding: isMobile ? '10px 37px' : ''
            }}
            onClick={() => setShowIndexHandler(true)}
        >

            <b className={isMobile ? 'd-none' : ''}> {isEnglish ? "Open Index" : "Ver Índice"} </b>
            <b className={isMobile ? '' : 'd-none'}> {isEnglish ? "Index" : "Índice"} </b>
            
        </div>

    </>
    )
}

IndexButton.propTypes = {
    isEnglish: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    setShowIndexHandler: PropTypes.func.isRequired
}

IndexButton.defaultProps = {
    isDarkMode: true
}
