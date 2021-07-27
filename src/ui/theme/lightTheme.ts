import { DefaultTheme } from 'styled-components'

const colors: DefaultTheme['colors'] = {
    background: '#b8bfbe',
    text: '#444444',
    textLight: '#888888',
    accent: '#358795',
    lcd: {
        background: '#adab9d',
        border: '#89887b',
        text: '#5f5f55',
        textHighlight: '#36362f',
    },
    alternateMaterial: {
        background: '#aa9c8a',
        backgroundLight: '#c2b29f',
        backgroundDark: '#978c7d',
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
        mainGap: 6,
        enclosureBorderRadius: 0,
    },
    shadows: {
        lcdTextHighlight: 'none',
    },
    enclosure: {
        background: '#c1c7c7',
        backgroundLight: '#d8dcdc',
        backgroundDark: '#adb3b3',
        border: '#b4bbbb',
        castShadow: `0 1px 1px rgba(0, 0, 0, 0.15),
            1px 3px 8px rgba(0, 0, 0, 0.1)`,
        innerCastShadowColor: `rgba(0, 0, 0, 0.1)`,
        innerCastShadowColorLight: `rgba(0, 0, 0, 0.05)`,
        innerCastShadowColorDark: `rgba(0, 0, 0, 0.15)`,
        sideThickness: 10,
    },
}
