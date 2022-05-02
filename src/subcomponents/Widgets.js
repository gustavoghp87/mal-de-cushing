import { PropTypes } from 'prop-types'
import { DarkModeButton } from './Widgets/DarkModeButton'
import { IndexButton } from './Widgets/IndexButton'
import { SizeButton } from './Widgets/SizeButton'

export const Widgets = ({ isDarkMode, isEnglish, isMobile, setIsDarkModeHandler, setShowIndexHandler }) => {

    return (
        <div
            className={`${isMobile ? 'w-100' : ''} ${isMobile && isDarkMode ? 'bg-dark' : 'bg-secondary'}`}
            style={{ position: isMobile ? 'fixed' : '', top: isMobile ? 0 : '' }}
        >
            <div
                className={`${isMobile ? 'row d-flex align-items-center' : ''}`}
                style={{ justifyContent: isMobile ? 'space-evenly' : '' }}
            >

                <DarkModeButton
                    isEnglish={isEnglish}
                    isMobile={isMobile}
                    isDarkMode={isDarkMode}
                    setIsDarkModeHandler={setIsDarkModeHandler}
                />

                <IndexButton
                    isEnglish={isEnglish}
                    isMobile={isMobile}
                    isDarkMode={isDarkMode}
                    setShowIndexHandler={setShowIndexHandler}
                />

                <SizeButton
                    isEnglish={isEnglish}
                    isMobile={isMobile}
                    isDarkMode={isDarkMode}
                />

            </div>
        </div>
    )
}

Widgets.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    isEnglish: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
    setIsDarkModeHandler: PropTypes.func.isRequired,
    setShowIndexHandler: PropTypes.func.isRequired
}

Widgets.defaultProps = {
    isDarkMode: true
}
