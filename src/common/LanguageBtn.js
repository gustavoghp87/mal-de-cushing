import { PropTypes } from 'prop-types'
import { ArrowBarRight } from 'react-bootstrap-icons'
import styles from '../css/styles.module.css'

export const LanguageBtn = ({ isEnglish, setIsEnglish }) => {

    return (
        <div style={{ paddingTop: '90px' }}>
            <div className={styles.card + ' d-block m-auto'} onClick={() => setIsEnglish(!isEnglish)}>
                <h2 className={'mb-0 text-center'} style={{ width: '250px' }}>
                    {isEnglish ? "Versión en Español" : "English version"}
                    &nbsp; <ArrowBarRight />
                </h2>
            </div>
        </div>
    )
}

LanguageBtn.propTypes = {
    isEnglish: PropTypes.bool.isRequired,
    setIsEnglish: PropTypes.func.isRequired
}
