import { useDispatch, useSelector } from 'react-redux'
import { changeShowIndexReducer } from '../../reducers/showIndexSlice'
import styles from '../../css/styles.module.css'

export const IndexButton = () => {

    const { isDarkMode } = useSelector(state => state.isDarkMode)
    const { isEnglish } = useSelector(state => state.isEnglish)
    const { isMobile } = useSelector(state => state.isMobile)
    const dispatch = useDispatch()

    return (
    <>
        <div
            className={`${styles.card} ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}
            style={{
                position: isMobile ? '' : 'fixed',
                left: isMobile ? '' : 0,
                top: isMobile ? '' : 0,
                marginLeft: isMobile ? '' : '3%',
                cursor: 'pointer',
                padding: isMobile ? '11px 37px' : ''
            }}
            onClick={() => dispatch(changeShowIndexReducer(true))}
        >

            <b className={isMobile ? 'd-none' : ''}> {isEnglish ? "Open Index" : "Ver Índice"} </b>
            <b className={isMobile ? '' : 'd-none'}> {isEnglish ? "Index" : "Índice"} </b>
            
        </div>
    </>
    )
}
