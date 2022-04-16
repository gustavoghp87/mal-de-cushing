import styled from 'styled-components'

export const P = styled.p`
    text-align: justify;
    text-justify: inter-word;
    text-indent: 40px;
    font-size: ${window.localStorage.getItem('textSizeCushing') ?? '1rem'};
`

// export const LINK2 = styled(Link)`
//     text-decoration: none;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `
