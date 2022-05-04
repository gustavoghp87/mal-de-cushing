import { PlusSquare, DashSquare } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import styles from '../../css/styles.module.css'

export const SizeButton = () => {

    const { isDarkMode, isEnglish, isMobile } = useSelector(state => state)
    const textSize = window.localStorage.getItem('textSizeCushing')
    
    return (
        <div
            className={`${styles.card} ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}
            style={{
                position: isMobile ? '' : 'fixed',
                bottom: isMobile ? '' : 0,
                right: isMobile ? '' : 0,
                marginRight: isMobile ? '' : '3%',
                padding: '5px'
            }}
        >

            <div className={isDarkMode ? 'text-white' : undefined}>
                
                <div
                    className={`p-1 pl-2 ${textSize === '1.8rem' && 'd-none'}`}
                    onClick={() => {
                        if (textSize === '1.5rem') window.localStorage.setItem('textSizeCushing', "1.8rem")
                        else window.localStorage.setItem('textSizeCushing', "1.5rem")
                        window.location.reload()
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <PlusSquare size={26} />
                    &nbsp;
                    <b className={isMobile ? 'd-none' : undefined}> {isEnglish ? 'Increase Text Size' : 'Agrandar Texto'} &nbsp; </b>
                    <b className={!isMobile ? 'd-none' : undefined}> A &nbsp; </b>
                    {/* color={'royalblue'} */}
                </div>

                <div
                    className={`p-1 pl-2 ${textSize === '1rem' ? 'd-none' : undefined}`}
                    onClick={() => {
                        if (textSize === '1.8rem') window.localStorage.setItem('textSizeCushing', "1.5rem")
                        else window.localStorage.setItem('textSizeCushing', "1rem")
                        window.location.reload()
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <DashSquare size={26} />
                    &nbsp;
                    <b className={isMobile ? 'd-none' : undefined}> {isEnglish ? 'Decrease Text Size' : 'Achicar Texto'} </b>
                    <b className={!isMobile ? 'd-none' : undefined}> A </b>
                </div>
            </div>

        </div>
    )
}
