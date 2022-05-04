import { useSelector } from 'react-redux'

export const Hr = () => {
    
    const { isDarkMode } = useSelector(state => state)

    return (
        <hr className={isDarkMode ? 'bg-white' : 'bg-dark'} style={{ marginTop: '80px', marginBottom: '80px' }} />
    )
}
