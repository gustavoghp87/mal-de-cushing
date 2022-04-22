import styled from 'styled-components'

let isMobile = window.innerWidth < 1000

export const P = styled.p`
    text-align: ${isMobile ? '' : 'justify'};
    text-justify: ${isMobile ? '' : 'inter-word'};
    text-indent: ${isMobile ? '20px' : '40px'};
    line-height: ${isMobile ? '2rem' : '1.15'};
    font-size: ${window.localStorage.getItem('textSizeCushing') ?? '1rem'};
    margin-bottom: ${isMobile ? '50px' : ''};
`

export const subtitleStyles = {
    fontSize: isMobile ? '2.2rem' : '2.8rem',
    lineHeight: 1.15,
    textAlign: 'center',
    marginTop: isMobile ? '100px' : '50px',
    marginBottom: '30px',
    marginInline: isMobile ? '7%' : '15%'
}

export const pItems = {
    textIndent: '0 !important',
    margin: '30px 5%',
    fontWeight: 'bold',
    textAlign: 'justify',
    textJustify: 'inter-word',
    //fontSize: window.localStorage.getItem('textSizeCushing') ?? '1rem'
}
