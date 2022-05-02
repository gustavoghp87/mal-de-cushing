import { P } from '../css/styles'

export const LinkToDocuments = ({ isEnglish }) => {

    return (
        <>
            <P>
                {isEnglish ? "" : "Esto es todo lo que puedo dar sobre el tema. Y este es el link para consultar todos los estudios de Ally:"}
            </P>

            <p className={'text-center my-4'} style={{ maxWidth: '95%' }}>
                <a href="https://www.dropbox.com/sh/33534lmwfim6mn6/AADsNVdoY_TwsBf5Q2B3_9dva?dl=0" target={'_blank'} rel={'noreferrer'}>
                    {isEnglish ? "Link to Dropbox" : "Link a Dropbox"}
                </a>
            </p>
        </>
    )
}
