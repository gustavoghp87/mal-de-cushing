import { Modal, Button } from 'react-bootstrap'
import { PropTypes } from 'prop-types'

export const IndexModal = ({ isEnglish, isMobile, isDarkMode, showIndex, setShowIndexHandler }) => {
    
    const IndexComponent = () => {

        const sections = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25', '26']
    
        return(
        <>
            {sections.map((section, index) => (
                <div key={index}>
                    <a href={"#" + section} type={'button'}>
                        <h6> {document?.getElementById(section)?.innerText} </h6>
                    </a>
                </div>
            ))}
        </>
        )
    }

    return (
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
    )
}

IndexModal.propTypes = {
    isEnglish: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    showIndex: PropTypes.bool.isRequired,
    setShowIndexHandler: PropTypes.func.isRequired
}

IndexModal.defaultProps = {
    isDarkMode: true
}