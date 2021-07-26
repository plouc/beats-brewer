import { DefaultTheme } from 'styled-components'

const colors: DefaultTheme['colors'] = {
    background: '#b8bfbe',
    text: '#444444',
    textLight: '#888888',
    accent: '#358795',
    enclosure: {
        background: '#c1c7c7',
        border: '#b4bbbb',
    },
    lcd: {
        background: '#adab9d',
        border: '#89887b',
        text: '#5f5f55',
        textHighlight: '#36362f',
    },
    alternateMaterial: {
        background: '#aa9c8a',
    },
}

export const lightTheme: DefaultTheme = {
    id: 'light',
    name: 'Light Theme',
    typography: {
        headingFont: `'Montserrat', sans-serif`,
        monospacedFont: `'IBM Plex Mono', monospace`,
    },
    colors,
    sizes: {
        mainGap: 8,
        enclosureBorderRadius: 4,
    },
    shadows: {
        lcdTextHighlight: 'none',
        enclosure: `0 1px 1px rgba(0, 0, 0, 0.1),
            1px 3px 8px rgba(0, 0, 0, 0.1)`,
    },
}
