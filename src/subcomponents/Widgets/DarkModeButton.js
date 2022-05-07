import { useDispatch, useSelector } from 'react-redux'
import { changeisDarkModeReducer } from '../../reducers/isDarkModeSlice'
import styles from '../../css/styles.module.css'

export const DarkModeButton = () => {

    const { isDarkMode, isEnglish, isMobile } = useSelector(state => state)
    const dispatch = useDispatch()
    
    return (
        <div
            className={`${styles.card} custom-control custom-switch ${isDarkMode ? 'bg-dark' : 'bg-light'} `}
            style={{
                bottom: isMobile ? '' : 0,
                cursor: 'pointer',
                left: isMobile ? '' : 0,
                marginLeft: isMobile ? '' : '3%',
                padding: '11px 10px',
                position: isMobile ? '' : 'fixed'
            }}
        >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            
            <input className={'custom-control-input'}
                type={'checkbox'}
                id={"customSwitches"}
                checked={isDarkMode}
                onChange={() => dispatch(changeisDarkModeReducer())}
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
