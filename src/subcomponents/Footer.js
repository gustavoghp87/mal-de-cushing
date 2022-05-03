import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Image } from 'react-bootstrap'
import styles from '../css/styles.module.css'

export const Footer = () => {
    
    const [showQR, setShowQR] = useState(false)
    const { isEnglish } = useSelector(state => state.isEnglish)
    
    return (
        <footer className={`${styles.footer} d-flex flex-column align-items-center mt-4`}>

            <div className={'my-2'} style={{ maxWidth: '80%' }}>
                <p> {isEnglish ? "Donations are accepted in Bitcoin for the payment of the domain" : "Se aceptan donaciones en Bitcoin para pagar el dominio:"} </p>
                <p> 1AtHe23t5zHWPS5wSYtDXz2fFjZqB9FgHN </p>
                <Button variant={'danger'} size={'sm'} onClick={() => setShowQR(s => !s)}>
                    {showQR ?
                        isEnglish ? "Hide QR" : "Ocultar QR"
                        :
                        isEnglish ? "View QR code" : "Ver código QR"
                    }
                </Button>
                <div className={showQR ? 'mt-4' : 'd-none'}>
                    <Image src={"qr-code.png"} />
                </div>
            </div>

            <div className={'bg-danger mt-4'}>
                <a
                    className={'d-inline'}
                    href={"https://www.maldecushing.com"}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                >
                    www.maldecushing.com
                </a>
                    
                &nbsp; | <a href={"mailto:ghc.8786@gmail.com"} className={'d-inline'}> ghc.8786@gmail.com </a>

            </div>
        </footer>
    )
}
