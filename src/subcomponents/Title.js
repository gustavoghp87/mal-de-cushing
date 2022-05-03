import { useSelector } from 'react-redux'

export const Title = () => {

    const { isEnglish } = useSelector(state => state.isEnglish)
    const { isMobile } = useSelector(state => state.isMobile)
    
    return (
        <div
            style={{
                margin: 0,
                lineHeight: 1.15,
                fontSize: isMobile ? '2.5rem ' : '3.4rem',
                textAlign: 'center',
                paddingTop: isMobile ? '80px' : '140px',
                marginBottom: '60px'
            }}
        >
            <p>
                {isEnglish ?
                    "Cushing's Desease in dogs and trilostane & mitotane treatments:"
                    :
                    "Mal de Cushing en perros y tratamientos con trilostano y mitotano:"
                }
            </p>

            <p>
                {isEnglish ?
                    "Ally's case"
                    :
                    "El caso de Ally"
                }
            </p>
        </div>
    )
}
