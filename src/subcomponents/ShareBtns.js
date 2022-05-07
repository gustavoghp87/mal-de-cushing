import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TelegramShareButton, TumblrShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import { EmailIcon, FacebookIcon, LinkedinIcon, RedditIcon, TelegramIcon, TumblrIcon, TwitterIcon, WhatsappIcon } from 'react-share'
import styles from '../css/styles.module.css'

export const ShareBtns = () => {

    const { isEnglish } = useSelector(state => state)
    const [copiedToClipboard, setCopiedToClipboard] = useState(false)
    const shareUrl = "https://gustavoghp87.github.io/mal-de-cushing"
    const title = isEnglish ? "Cushing's Desease in dogs: Ally's case" : "Mal de Cushing en perros: El caso de Ally"

    const socialNetworks = [
        {
            button: FacebookShareButton,
            icon: FacebookIcon,
            text: isEnglish ? "Share on Facebook" : "Compartir en Facebook"
        },
        {
            button: TwitterShareButton,
            icon: TwitterIcon,
            text: isEnglish ? "Share on Twitter" : "Compartir en Twitter"
        },
        {
            button: TelegramShareButton,
            icon: TelegramIcon,
            text: isEnglish ? "Share via Telegram" : "Compartir por Telegram"
        },
        {
            button: WhatsappShareButton,
            icon: WhatsappIcon,
            text: isEnglish ? "Share via WhatsApp " : "Compartir por WhatsApp"
        },
        {
            button: LinkedinShareButton,
            icon: LinkedinIcon,
            text: isEnglish ? "Share on LinkedIn " : "Compartir en LinkedIn"
        },
        {
            button: RedditShareButton,
            icon: RedditIcon,
            text: isEnglish ? "Share on Reddit" : "Compartir en Reddit"
        },
        {
            button: TumblrShareButton,
            icon: TumblrIcon,
            text: isEnglish ? "Share on Tumblr" : "Compartir en Tumblr"
        },
        {
            button: EmailShareButton,
            icon: EmailIcon,
            text: isEnglish ? "Share via e-mail" : "Compartir por e-mail"
        }
    ]
    // fb: quote, no title; reddit: windowWidth, windowHeight; email: subject, body, no title;

    let lastClickTime = +new Date();

    const share = index => {
        const newLastClickTime = +new Date()
        if (newLastClickTime - lastClickTime > 500) document.getElementById("share-" + index).click()
        lastClickTime = newLastClickTime
    }

    return (
        <div style={{ marginTop: '60px' }}>

            <div className={'row d-flex align-items-center justify-content-center'}>
                {socialNetworks.map((socialNet, index) => (
                    <div key={index} className={styles.card} onClick={() => share(index)} style={{
                        cursor: 'pointer',
                        height: '80px',
                        marginInline: '10px',
                        width: '300px'
                    }}>
                        <socialNet.button
                            id={"share-" + index}
                            onClick={() => lastClickTime = +new Date()}
                            url={shareUrl}
                            title={title}
                            quote={title}
                            className={'ml-1'}
                            style={{ marginTop: '7px' }}
                            windowWidth={660}
                            windowHeight={460}
                            subject={title}
                            body={isEnglish ? "I share this website about Cushing's Desease in dogs: " : "Comparto este sitio web acerca del mal de Cushing en perros: "}
                        >
                            <socialNet.icon size={32} round className='' /> &nbsp; {socialNet.text}
                        </socialNet.button>
                    </div>
                ))}
            </div>

            <div className={'text-center inline'} style={{ marginTop: '40px' }}>
                <CopyToClipboard text={shareUrl} onCopy={() => setCopiedToClipboard(true)}>
                    <Button variant={copiedToClipboard ? 'danger' : 'secondary'} size={undefined} style={{ width: '300px' }}>
                        {copiedToClipboard ? 
                            isEnglish ? "Copied" : "Copiado"
                            :
                            isEnglish ? "Copy share link" : "Copiar Link para compartir"
                        }
                    </Button>
                </CopyToClipboard>
            </div>
            
        </div>
    )
}
