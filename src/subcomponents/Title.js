import { PropTypes } from 'prop-types'

export const Title = ({ isEnglish, isMobile }) => (
    <div
        style={{
            margin: 0,
            lineHeight: 1.15,
            fontSize: isMobile ? '2.5rem ' : '3.4rem',
            textAlign: 'center',
            marginTop: '140px',
            marginBottom: '60px'
        }}
    >
        {isEnglish ?
            "Cushing's Desease in dogs and trilostane & mitotane treatments:"
            :
            "Mal de Cushing en perros y tratamientos con trilostano y mitotano:"
        }
        <br/>
        {isEnglish ?
            "Ally's case"
            :
            "El caso de Ally"
        }
    </div>
)

Title.propTypes = {
    isEnglish: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired
}

Title.defaultProps = {
    isDarkMode: true
}
