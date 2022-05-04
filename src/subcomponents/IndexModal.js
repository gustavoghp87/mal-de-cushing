import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { changeShowIndexReducer } from '../reducers/showIndexSlice'

export const IndexModal = () => {
    
    const { isDarkMode, isEnglish, isMobile, showIndex } = useSelector(state => state)
    const dispatch = useDispatch()
    const sections = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25', '26']
    
    return (
        <Modal
            show={showIndex}
            onHide={() => dispatch(changeShowIndexReducer(false))}
        >
            <Modal.Header closeButton className={isDarkMode ? 'bg-dark text-white' : ''}>
                <Modal.Title> {isEnglish ? "Index" : "Índice"} </Modal.Title>
            </Modal.Header>

            <Modal.Body
                className={isDarkMode ? 'bg-dark text-white' : ''}
                onClick={() => dispatch(changeShowIndexReducer(false))}
            >
                {sections.map((section, index) => (
                    <div key={index} style={{ cursor: 'pointer' }} onClick={() => {
                        if (isMobile) {
                            setTimeout(() => {
                                window.location.href = `${window.location.pathname}#${section}`
                                window.scrollTo(window.scrollX, window.scrollY - 100)
                                    setTimeout(() => {
                                    window.scrollTo(window.scrollX, window.scrollY + 1)
                                }, 200);
                            }, 200)
                        } else {
                            window.location.href = `${window.location.pathname}#${section}`
                            window.scrollTo(window.scrollX, window.scrollY - 50)
                            setTimeout(() => {
                                window.scrollTo(window.scrollX, window.scrollY + 1)
                            }, 300)
                        }
                    }}>
                        <h6> {document?.getElementById(section)?.innerText} </h6>
                    </div>
                ))}
            </Modal.Body>

            <Modal.Footer className={isDarkMode ? 'bg-dark text-white' : ''}>
                <Button variant={'danger'} onClick={() => dispatch(changeShowIndexReducer(false))}>
                    {isEnglish ? "Close" : "Cerrar"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
