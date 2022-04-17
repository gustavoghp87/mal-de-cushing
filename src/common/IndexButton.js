import styles from '../css/Home.module.css'
import { IndexComponent } from './IndexComponent'
import { Modal, Button } from 'react-bootstrap'

export const IndexButton = props => {

    const { isEnglish, isMobile, isDarkMode, showIndex, setShowIndexHandler } = props
    
    return (
    <>
        <div
            className={`${styles.card} ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                marginLeft: '3%',
                cursor: 'pointer',
                padding: isMobile ? '10px 37px' : ''
            }}
            onClick={() => setShowIndexHandler(true)}
        >

            <b className={isMobile ? 'd-none' : ''}> {isEnglish ? "Open Index" : "Ver Índice"} </b>
            <b className={isMobile ? '' : 'd-none'}> {isEnglish ? "Index" : "Índice"} </b>
            
        </div>


        <Modal
            show={showIndex}
            onHide={() => setShowIndexHandler(false)}
            
        >

            <Modal.Header closeButton className={isDarkMode ? 'bg-dark text-white' : ''}>
                <Modal.Title> {isEnglish ? "Index" : "Índice"} </Modal.Title>
            </Modal.Header>

            <Modal.Body
                className={isDarkMode ? 'bg-dark text-white' : ''}
                onClick={() => setShowIndexHandler(false)}
            >
                <IndexComponent />
            </Modal.Body>

            <Modal.Footer className={isDarkMode ? 'bg-dark text-white' : ''}>
                <Button variant={'danger'} onClick={() => setShowIndexHandler(false)}>
                    {isEnglish ? "Close" : "Cerrar"}
                </Button>
            </Modal.Footer>
        </Modal>

    </>
    )
}
