import styles from '../css/Home.module.css'
import { PlusSquare, DashSquare } from 'react-bootstrap-icons'

export const SizeButton = props => {

    const { isDarkMode, isEnglish } = props
    const textSize = window.localStorage.getItem('textSizeCushing')
    
    return (
        <div
            className={styles.card + ` ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}
            style={{
                position: 'fixed',
                bottom: '10px',
                right: 0,
                marginRight: '3%',
                padding: '5px',
                color: 'inherit',
                textDecoration: 'none',
                border: '1px solid #eaeaea',
                borderRadius: '10px',
                transition: 'color 0.15s ease, border-color 0.15s ease'
            }}
        >

            <div className={isDarkMode ? 'text-white' : ''}>
                
                <div
                    className={`p-1 pl-2 ${textSize === '1.8rem' ? 'd-none' : ''}`}
                    onClick={() => {
                        if (textSize === '1.5rem') window.localStorage.setItem('textSizeCushing', "1.8rem")
                        else window.localStorage.setItem('textSizeCushing', "1.5rem")
                        window.location.reload()
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <PlusSquare size={26} /> &nbsp; <b> {isEnglish ? 'Increase Text Size' : 'Agrandar Texto'} &nbsp; </b>
                    {/* color={'royalblue'} */}
                </div>

                <div
                    className={`p-1 pl-2 ${textSize === '1rem' ? 'd-none' : ''}`}
                    onClick={() => {
                        if (textSize === '1.8rem') window.localStorage.setItem('textSizeCushing', "1.5rem")
                        else window.localStorage.setItem('textSizeCushing', "1rem")
                        window.location.reload()
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <DashSquare size={26} /> &nbsp; <b> {isEnglish ? 'Decrease Text Size' : 'Achicar Texto'} </b>
                </div>
            </div>

        </div>

    )
}
