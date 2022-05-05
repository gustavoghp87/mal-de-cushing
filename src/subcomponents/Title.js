import { useSelector } from 'react-redux'

export const Title = () => {

    const { isEnglish, isMobile } = useSelector(state => state)
    
    return (
        <div
            style={{
                fontSize: isMobile ? '2.5rem ' : '3.4rem',
                lineHeight: 1.15,
                margin: 0,
                marginBottom: '60px',
                paddingTop: isMobile ? '80px' : '110px',
                textAlign: 'center'
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
