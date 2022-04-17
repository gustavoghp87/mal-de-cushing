import styled from 'styled-components'

let isMobile = window.innerWidth < 1000

export const P = styled.p`
    text-align: justify;
    text-justify: inter-word;
    text-indent: ${isMobile ? '20px' : '40px'};
    font-size: ${window.localStorage.getItem('textSizeCushing') ?? '1rem'};
`

export const subtitleStyles = {
    fontSize: isMobile ? '2.2rem' : '2.8rem',
    lineHeight: 1.15,
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '30px',
    marginInline: isMobile ? '7%' : '15%'
}

// export const LINK2 = styled(Link)`
//     text-decoration: none;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `
