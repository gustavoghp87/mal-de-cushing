import styles from '../css/styles.module.css'
import { PropTypes } from 'prop-types'

export const DarkModeButton = ({ isEnglish, isMobile, isDarkMode, setIsDarkModeHandler }) => {
    
    return (
        <div
            className={`${styles.card} custom-control custom-switch ${isDarkMode ? 'bg-dark' : 'bg-light'} `}
            style={{
                position: isMobile ? '' : 'fixed',
                bottom: isMobile ? '' : 0,
                left: isMobile ? '' : 0,
                marginLeft: isMobile ? '' : '3%',
                cursor: 'pointer',
                padding: '10px'
            }}
        >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            
            <input className={'custom-control-input'}
                type={'checkbox'}
                id={"customSwitches"}
                checked={isDarkMode}
                onChange={() => {
                    window.localStorage.setItem('darkModeCushing', (!isDarkMode).toString())
                    setIsDarkModeHandler(!isDarkMode)
                }}
            />
            
            <label
                className={`custom-control-label ${isDarkMode ? 'text-white' : ''}`}
                htmlFor={'customSwitches'}
                style={{ cursor: 'pointer' }}
            >
                <b> {isEnglish && isDarkMode && (isMobile ? 'Mode' : 'Light Mode')} </b>
                <b> {isEnglish && !isDarkMode && (isMobile ? 'Mode' : 'Dark Mode')} </b>
                <b> {!isEnglish && isDarkMode && (isMobile ? 'Modo' : 'Modo Claro')} </b>
                <b> {!isEnglish && !isDarkMode && (isMobile ? 'Modo' : 'Modo Oscuro')} </b>
            </label>
            
        </div>
    )
}

DarkModeButton.propTypes = {
    isEnglish: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    setIsDarkModeHandler: PropTypes.func.isRequired
}

DarkModeButton.defaultProps = {
    isDarkMode: true
}
