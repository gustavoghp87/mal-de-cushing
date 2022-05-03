import { PropTypes } from 'prop-types'
import styles from '../css/styles.module.css'

export const LinkToDocuments = ({ isEnglish }) => {

    const url = "https://www.dropbox.com/sh/33534lmwfim6mn6/AADsNVdoY_TwsBf5Q2B3_9dva?dl=0"

    return (
        <>
            <p className={'text-center'} style={{ marginBottom: '50px' }}>
                {isEnglish ?
                    "This is all I can give on the subject. And this is the link to consult all of Ally's studies:"
                    :
                    "Esto es todo lo que puedo dar sobre el tema. Y este es el enlace para consultar todos los estudios de Ally:"
                }
            </p>

            <div className={`${styles.card} d-block m-auto`} style={{ cursor: 'pointer' }} onClick={() => window.open(url, '_blank').focus()}>
                <p className={'text-center my-4'} style={{ maxWidth: '95%' }}>
                    {isEnglish ?
                        "Documents in Dropbox"
                        :
                        "Documentos en Dropbox"
                    }
                </p>
            </div>
        </>
    )
}

LinkToDocuments.propTypes = {
    isEnglish: PropTypes.bool.isRequired,
}
