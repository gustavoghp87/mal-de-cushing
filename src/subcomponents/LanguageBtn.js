import { useDispatch, useSelector } from 'react-redux'
import { ArrowBarRight } from 'react-bootstrap-icons'
import { changeIsEnglishReducer } from '../reducers/isEnglishSlice'
import styles from '../css/styles.module.css'

export const LanguageBtn = () => {

    const { isEnglish, isMobile } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div style={{ paddingTop: isMobile ? '120px' : '90px' }}>
            <div className={styles.card + ' d-block m-auto'} style={{ cursor: 'pointer' }} onClick={() => dispatch(changeIsEnglishReducer())}>
                <h2 className={'mb-0 text-center'} style={{ width: '250px' }}>
                    {isEnglish ? "Versión en Español" : "English version"}
                    &nbsp; <ArrowBarRight />
                </h2>
            </div>
        </div>
    )
}
