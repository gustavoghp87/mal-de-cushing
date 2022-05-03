import { useDispatch, useSelector } from 'react-redux'
import { ArrowBarRight } from 'react-bootstrap-icons'
import { changeIsEnglishReducer } from '../reducers/isEnglishSlice'
import styles from '../css/styles.module.css'

export const LanguageBtn = () => {

    const { isEnglish } = useSelector(state => state.isEnglish)
    const dispatch = useDispatch()

    return (
        <div style={{ paddingTop: '90px' }}>
            <div className={styles.card + ' d-block m-auto'} onClick={() => dispatch(changeIsEnglishReducer())}>
                <h2 className={'mb-0 text-center'} style={{ width: '250px' }}>
                    {isEnglish ? "Versión en Español" : "English version"}
                    &nbsp; <ArrowBarRight />
                </h2>
            </div>
        </div>
    )
}
