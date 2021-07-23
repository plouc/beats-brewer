import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle`
    body, html {
        font-family: ${(props) => props.theme.typography.monospacedFont};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
    }
    
    *, *:after, *:before {
        box-sizing: border-box;
    }
    
    a {
        color: inherit;
    }
`
