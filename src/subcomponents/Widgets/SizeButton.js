import { useDispatch, useSelector } from 'react-redux'
import { PlusSquare, DashSquare } from 'react-bootstrap-icons'
import { changeFontSizeReducer, size0, size2 } from '../../reducers/fontSizeSlice'
import styles from '../../css/styles.module.css'

export const SizeButton = () => {

    const { fontSize, isDarkMode, isEnglish, isMobile } = useSelector(state => state)
    const dispatch = useDispatch()
    
    return (
        <div
            className={`${styles.card} ${isDarkMode ? 'bg-dark text-white' : 'bg-light'}`}
            style={{
                bottom: isMobile ? '' : 0,
                marginRight: isMobile ? '' : '3%',
                padding: '5px',
                position: isMobile ? '' : 'fixed',
                right: isMobile ? '' : 0
            }}
        >

            <div className={isDarkMode ? 'text-white' : undefined}>
                
                <div
                    className={`p-1 pl-2 ${fontSize === size2 ? 'd-none' : ''}`}
                    onClick={() => dispatch(changeFontSizeReducer("increase"))}
                    style={{ cursor: 'pointer' }}
                >
                    <PlusSquare size={26} /> {/* color={'royalblue'} */}
                    &nbsp;
                    {isMobile ?
                        <b> A &nbsp; </b>
                    :
                        <b> {isEnglish ? 'Increase Text Size' : 'Agrandar Texto'} &nbsp; </b>
                    }
                </div>

                <div
                    className={`p-1 pl-2 ${fontSize === size0 ? 'd-none' : ''}`}
                    onClick={() => dispatch(changeFontSizeReducer("decrease"))}
                    style={{ cursor: 'pointer' }}
                >
                    <DashSquare size={26} />
                    &nbsp;
                    {isMobile ?
                        <b> A </b>
                    :
                        <b> {isEnglish ? 'Decrease Text Size' : 'Achicar Texto'} </b>
                    }
                </div>
            </div>

        </div>
    )
}
