import styled from 'styled-components'

const isMobile = window.innerWidth < 1000

export const P = styled.p`
    font-size: ${window.localStorage.getItem('textSizeCushing') ?? '1rem'};
    line-height: ${isMobile ? '2rem' : '200%'};
    margin-bottom: ${isMobile ? '50px' : ''};
    text-align: ${isMobile ? window.localStorage.getItem('textSizeCushing') === '1.8rem' ? '' : 'justify' : 'justify'};
    text-indent: ${isMobile ? '10px' : '40px'};
    text-justify: ${isMobile ? '' : 'inter-word'};
`

export const subtitleStyles = {
    fontSize: isMobile ? '2.2rem' : '2.8rem',
    lineHeight: 1.15,
    textAlign: 'center',
    marginTop: isMobile ? '100px' : '70px',
    marginBottom: '40px',
    marginInline: isMobile ? '7%' : '15%'
}

// export const pItems = {
//     textIndent: '0 !important',
//     margin: '30px 5%',
//     fontWeight: 'bold',
//     textAlign: 'justify',
//     textJustify: 'inter-word',
// }
