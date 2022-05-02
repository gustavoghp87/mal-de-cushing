import { PropTypes } from 'prop-types'

export const Hr = ({ isDarkMode }) => {
    
    return (
        <hr className={isDarkMode ? 'bg-white' : 'bg-dark'} style={{ marginTop: '40px', marginBottom: '40px' }} />
    )
}

Hr.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
}

Hr.defaultProps = {
    isDarkMode: true
}
