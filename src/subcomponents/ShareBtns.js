import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from 'react-share'
import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    WhatsappIcon
} from 'react-share'
import { Hr } from './Hr'
import styles from '../css/styles.module.css'

export const ShareBtns = () => {

    const shareUrl = "https://gustavoghp87.github.io/mal-de-cushing"
    const title = 'Mal de Cushing en perros: El caso de Ally'
    const [copiedToClipboard, setCopiedToClipboard] = useState(false)

    const socialNetworks = [
        {
            button: FacebookShareButton,
            icon: FacebookIcon,
            text: "Compartir en Facebook"
        },
        {
            button: TwitterShareButton,
            icon: TwitterIcon,
            text: "Compartir en Twitter"
        },
        {
            button: TelegramShareButton,
            icon: TelegramIcon,
            text: "Compartir por Telegram"
        },
        {
            button: WhatsappShareButton,
            icon: WhatsappIcon,
            text: "Compartir por WhatsApp"
        },
        {
            button: LinkedinShareButton,
            icon: LinkedinIcon,
            text: "Compartir en LinkedIn"
        },
        {
            button: RedditShareButton,
            icon: RedditIcon,
            text: "Compartir en Reddit"
        },
        {
            button: TumblrShareButton,
            icon: TumblrIcon,
            text: "Compartir en Tumblr"
        },
        {
            button: EmailShareButton,
            icon: EmailIcon,
            text: "Compartir por e-mail"
        }
    ] // fb: quote, no title; reddit: windowWidth, windowHeight; email: subject, body, no title;

    return (
        <div style={{ marginTop: '60px' }}>

            <Hr />

            <div className={'row d-flex align-items-center justify-content-center'}>
                {socialNetworks.map((socialNet, index) => (
                    <div key={index} className={styles.card} style={{
                        width: '300px',
                        height: '80px',
                        marginInline: '10px'
                    }}>
                        <socialNet.button
                            url={shareUrl}
                            title={title}
                            quote={title}
                            className={'mt-2'}
                            windowWidth={660}
                            windowHeight={460}
                            subject={title}
                            body={"Comparto este sitio web acerca del mal de Cushing en perros: "}
                        >
                            <socialNet.icon size={32} round /> &nbsp; {socialNet.text}
                        </socialNet.button>
                    </div>
                ))}
            </div>

            <div className={'text-center inline'} style={{ marginTop: '40px' }}>
                <CopyToClipboard text={shareUrl} onCopy={() => setCopiedToClipboard(true)}>
                    <Button variant={copiedToClipboard ? 'danger' : 'secondary'} size={undefined} style={{ width: '300px' }}>
                        {copiedToClipboard ? 
                            "Copiado"
                            :
                            "Copiar Link para compartir"
                        }
                    </Button>
                </CopyToClipboard>
            </div>
            
        </div>
    )
}