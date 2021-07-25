import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
    id: 'light',
    name: 'Light Theme',
    typography: {
        headingFont: `'Montserrat', sans-serif`,
        monospacedFont: `'IBM Plex Mono', monospace`,
    },
    colors: {
        background: '#c4cbca',
        text: '#444444',
        textLight: '#888888',
        accent: '#3f9aaa',
        wood: '#bfb1a1',
        enclosureBorder: '#dce0df',
        enclosureBackground: '#d2d9d8',
        enclosureSide: '#b2b6b5',
        lcdBackground: '#adab9d',
        lcdBorder: '#89887b',
        lcdText: '#5f5f55',
        lcdHighlightText: '#36362f',
    },
}
