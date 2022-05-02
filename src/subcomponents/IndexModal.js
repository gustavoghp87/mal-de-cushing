import { Modal, Button } from 'react-bootstrap'
import { PropTypes } from 'prop-types'

export const IndexModal = ({ isEnglish, isDarkMode, showIndex, setShowIndexHandler }) => {
    
    const sections = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25', '26']
    
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
                {sections.map((section, index) => (
                    <div key={index}>
                        <a href={"#" + section}>
                            <h6> {document?.getElementById(section)?.innerText} </h6>
                        </a>
                    </div>
                ))}
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
    isDarkMode: PropTypes.bool.isRequired,
    showIndex: PropTypes.bool.isRequired,
    setShowIndexHandler: PropTypes.func.isRequired
}

IndexModal.defaultProps = {
    isDarkMode: true
}