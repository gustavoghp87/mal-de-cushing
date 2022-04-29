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
import styles from '../css/styles.module.css'

export const ShareBtns = () => {

    const shareUrl = "https://gustavoghp87.github.io/mal-de-cushing"
    const title = 'Mal de Cushing en perros: El caso de Ally'
    const [copiedToClipboard, setCopiedToClipboard] = useState(false)

    const cardWidth = '100%'

    return (
        <div style={{ marginTop: '60px' }}>

            <hr className={'bg-white'} style={{ marginBottom: '80px' }} />

            <div className={'row d-flex'}>

                <div className={'col-xl-4 offset-xl-2 p-0 align-items-center justify-content-center'}>
                    
                    <div className={styles.card} style={{ width: cardWidth, marginInline: 'auto' }}>
                        <FacebookShareButton
                            url={shareUrl}
                            quote={title}
                            className={'my-2'}
                        >
                            <FacebookIcon size={32} round /> &nbsp; Compartir en Facebook
                        </FacebookShareButton>
                    </div>

                    <div className={styles.card} style={{ width: cardWidth, marginInline: 'auto'  }}>
                        <TwitterShareButton
                            url={shareUrl}
                            title={title}
                            className={'my-2'}
                        >
                            <TwitterIcon size={32} round /> &nbsp; Compartir en Twitter
                        </TwitterShareButton>
                    </div>

                    <div className={styles.card} style={{ width: cardWidth, marginInline: 'auto'  }}>
                        <TelegramShareButton
                            url={shareUrl}
                            title={title}
                            className={'my-2'}
                        >
                            <TelegramIcon size={32} round /> &nbsp; Compartir por Telegram
                        </TelegramShareButton>
                    </div>

                    <div className={styles.card} style={{ width: cardWidth, marginInline: 'auto'  }}>
                        <WhatsappShareButton
                            url={shareUrl}
                            title={title}
                            className={'my-2'}
                        >
                            <WhatsappIcon size={32} round /> &nbsp; Compartir por WhatsApp
                        </WhatsappShareButton>
                    </div>

                </div>

                <div className={'col-xl-4 offset-xl-0 p-0'}>
                    <div className={styles.card} style={{ width: cardWidth, marginInline: 'auto'  }}>
                        <LinkedinShareButton
                            url={shareUrl}
                            title={shareUrl}
                            className={'my-2'}
                        >
                            <LinkedinIcon size={32} round /> &nbsp; Compartir en LinkedIn
                        </LinkedinShareButton>
                    </div>

                    <div className={styles.card} style={{ width: cardWidth, marginInline: 'auto'  }}>
                        <RedditShareButton
                            url={shareUrl}
                            title={title}
                            windowWidth={660}
                            windowHeight={460}
                            className={'my-2'}
                        >
                            <RedditIcon size={32} round /> &nbsp; Compartir en Reddit
                        </RedditShareButton>
                    </div>

                    <div className={styles.card} style={{ width: cardWidth, marginInline: 'auto'  }}>
                        <TumblrShareButton
                            url={shareUrl}
                            title={title}
                            className={'my-2'}
                        >
                            <TumblrIcon size={32} round /> &nbsp; Compartir en Tumblr
                        </TumblrShareButton>
                    </div>

                    <div className={styles.card} style={{ width: cardWidth, marginInline: 'auto'  }}>
                        <EmailShareButton
                            url={shareUrl}
                            subject={title}
                            body={"Comparto este sitio web acerca del mal de Cushing en perros: "}
                            className={'my-2'}
                        >
                            <EmailIcon size={32} round /> &nbsp; Compartir por e-mail
                        </EmailShareButton>
                    </div>
                </div>
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