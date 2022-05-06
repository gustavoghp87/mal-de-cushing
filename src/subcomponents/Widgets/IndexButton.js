import { useDispatch, useSelector } from 'react-redux'
import { changeShowIndexReducer } from '../../reducers/showIndexSlice'
import styles from '../../css/styles.module.css'

export const IndexButton = () => {

    const { isDarkMode, isEnglish, isMobile } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
    <>
        <div
            className={`${styles.card} ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}
            style={{
                cursor: 'pointer',
                left: isMobile ? '' : 0,
                marginLeft: isMobile ? '' : '3%',
                padding: isMobile ? '11px 30px' : '',
                position: isMobile ? '' : 'fixed',
                top: isMobile ? '' : 0
            }}
            onClick={() => dispatch(changeShowIndexReducer(true))}
        >

            <b className={isMobile ? 'd-none' : ''}> {isEnglish ? "Open Index" : "Ver Índice"} </b>
            <b className={isMobile ? '' : 'd-none'}> {isEnglish ? "Index" : "Índice"} </b>
            
        </div>
    </>
    )
}
