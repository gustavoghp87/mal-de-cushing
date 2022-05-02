import { PropTypes } from 'prop-types'
import styles from '../../css/styles.module.css'

export const IndexButton = ({ isEnglish, isMobile, isDarkMode, setShowIndexHandler }) => {

    return (
    <>
        <div
            className={`${styles.card} ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}
            style={{
                position: isMobile ? '' : 'fixed',
                left: isMobile ? '' : 0,
                top: isMobile ? '' : 0,
                marginLeft: isMobile ? '' : '3%',
                cursor: 'pointer',
                padding: isMobile ? '11px 37px' : ''
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
