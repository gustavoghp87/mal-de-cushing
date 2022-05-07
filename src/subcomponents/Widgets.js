import { useSelector } from 'react-redux'
import { useShowWidgets } from '../custom-hooks/useShowWidgets'
import { DarkModeButton } from './Widgets/DarkModeButton'
import { IndexButton } from './Widgets/IndexButton'
import { SizeButton } from './Widgets/SizeButton'

export const Widgets = () => {

    const { isDarkMode, isMobile } = useSelector(state => state)
    const showWidgets = useShowWidgets()

    return (
        <>
        
        {isMobile && showWidgets
        ?
            <div
                className={`w-100' ${isDarkMode ? 'bg-dark' : 'bg-secondary'}`}
                style={{ position: 'fixed', top: 0 }}
            >
                <div
                    className={'row d-flex align-items-center'}
                    style={{ justifyContent: 'space-evenly' }}
                >

                    <DarkModeButton />

                    <IndexButton />

                    <SizeButton />

                </div>
            </div>
        :
            <div className={`${isDarkMode ? 'bg-dark' : 'bg-secondary'}`}>

                <DarkModeButton />

                <IndexButton />

                <SizeButton />

            </div>
        }
        </>
    )
}
