import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
    id: 'light',
    name: 'Light Theme',
    typography: {
        headingFont: `'Montserrat', sans-serif`,
        monospacedFont: `'IBM Plex Mono', monospace`,
    },
    colors: {
        background: '#b8bfbe',
        text: '#444444',
        textLight: '#888888',
        accent: '#358795',
        wood: '#aa9c8a',
        enclosureBorder: '#b4bbbb',
        enclosureBackground: '#c1c7c7',
        lcdBackground: '#adab9d',
        lcdBorder: '#89887b',
        lcdText: '#5f5f55',
        lcdHighlightText: '#36362f',
    },
}
