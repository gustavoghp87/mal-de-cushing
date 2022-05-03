import { useDispatch, useSelector } from 'react-redux'
import { changeisDarkModeReducer } from '../../reducers/isDarkModeSlice'
import styles from '../../css/styles.module.css'

export const DarkModeButton = () => {

    const { isDarkMode } = useSelector(state => state.isDarkMode)
    const { isEnglish } = useSelector(state => state.isEnglish)
    const { isMobile } = useSelector(state => state.isMobile)
    const dispatch = useDispatch()
    
    return (
        <div
            className={`${styles.card} custom-control custom-switch ${isDarkMode ? 'bg-dark' : 'bg-light'} `}
            style={{
                position: isMobile ? '' : 'fixed',
                bottom: isMobile ? '' : 0,
                left: isMobile ? '' : 0,
                marginLeft: isMobile ? '' : '3%',
                cursor: 'pointer',
                padding: '11px 10px'
            }}
        >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            
            <input className={'custom-control-input'}
                type={'checkbox'}
                id={"customSwitches"}
                checked={isDarkMode}
                onChange={() => {
                    window.localStorage.setItem('darkModeCushing', (!isDarkMode).toString())
                    dispatch(changeisDarkModeReducer())
                }}
            />
            
            <label
                className={`custom-control-label ${isDarkMode ? 'text-white' : ''}`}
                htmlFor={'customSwitches'}
                style={{ cursor: 'pointer' }}
            >
                <b> {isEnglish && isDarkMode && (isMobile ? 'Mode' : 'Light Mode')} </b>
                <b> {isEnglish && !isDarkMode && (isMobile ? 'Mode' : 'Dark Mode')} </b>
                <b> {!isEnglish && isDarkMode && (isMobile ? 'Modo' : 'Modo Claro')} </b>
                <b> {!isEnglish && !isDarkMode && (isMobile ? 'Modo' : 'Modo Oscuro')} </b>
            </label>
            
        </div>
    )
}
