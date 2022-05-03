import { useSelector } from 'react-redux'
import { useShowWidgets } from '../custom-hooks/useShowWidgets'
import { DarkModeButton } from './Widgets/DarkModeButton'
import { IndexButton } from './Widgets/IndexButton'
import { SizeButton } from './Widgets/SizeButton'

export const Widgets = () => {

    const { isDarkMode } = useSelector(state => state.isDarkMode)
    const { isMobile } = useSelector(state => state.isMobile)
    const showWidgets = useShowWidgets()

    return (
        <div
            className={`${isMobile ? 'w-100' : ''} ${isMobile && isDarkMode ? 'bg-dark' : 'bg-secondary'} ${showWidgets ? '' : 'd-none'}`}
            style={{ position: isMobile ? 'fixed' : '', top: isMobile ? 0 : '' }}
        >
            <div
                className={`${isMobile ? 'row d-flex align-items-center' : ''}`}
                style={{ justifyContent: isMobile ? 'space-evenly' : '' }}
            >

                <DarkModeButton />

                <IndexButton />

                <SizeButton />

            </div>
        </div>
    )
}
