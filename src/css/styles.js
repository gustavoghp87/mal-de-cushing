import styled from 'styled-components'
import { fontSizeCushing, size0, size2 } from '../reducers/fontSizeSlice'

const isMobile = window.innerWidth < 1000

const fontSize = window.localStorage.getItem(fontSizeCushing)

export const P = styled.p`
    font-size: ${fontSize ?? size0};
    line-height: ${isMobile ? fontSize === size2 ? '2.5rem' : '2rem' : '2.2rem'};
    margin-bottom: ${isMobile ? '50px' : '30px'};
    text-align: ${isMobile ? fontSize === size2 ? 'justify' : 'justify' : 'justify'};
    text-indent: ${isMobile ? '10px' : '40px'};
    text-justify: ${isMobile ? '' : 'inter-word'};
`

export const subtitleStyles = {
    fontSize: isMobile ? '2.2rem' : '2.8rem',
    lineHeight: 1.15,
    marginBottom: '50px',
    marginInline: isMobile ? '7%' : '15%',
    marginTop: isMobile ? '100px' : '100px',
    textAlign: 'center'
}

export const toggleListStyles = {
    marginInline: '3%',
    textIndent: '0'
}

export const DIV = styled.div`
    min-height: 100vh;
    margin-inline: ${isMobile ? '4%' : '20%'};
    margin-bottom: 120px;
`
export const I = styled.span`
    font-style: italic;
`
