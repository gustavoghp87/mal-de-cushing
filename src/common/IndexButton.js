import styles from '../css/Home.module.css'
import { IndexComponent } from './IndexComponent'
import { Modal, Button } from 'react-bootstrap'

export const IndexButton = props => {

    const { isDarkMode, showIndex, setShowIndexHandler, isEnglish } = props
    
    return (
    <>
        <div
            className={`${styles.card} ${isDarkMode ? 'bg-dark' : 'bg-light'}`}
            style={{ position: 'fixed', left: 0, top: 0, marginLeft: '3%' }}
            onClick={() => setShowIndexHandler(true)}
        >

            <b> {isEnglish ? "Open Index" : "Ver Índice"} </b>
            
        </div>


        <Modal show={showIndex} onHide={() => setShowIndexHandler(false)}>

            <Modal.Header closeButton className={isDarkMode ? 'bg-dark text-white' : ''}>
                <Modal.Title> {isEnglish ? "Index" : "Índice"} </Modal.Title>
            </Modal.Header>

            <Modal.Body onClick={() => setShowIndexHandler(false)} className={isDarkMode ? 'bg-dark text-white' : ''}>
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
