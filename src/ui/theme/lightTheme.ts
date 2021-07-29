import { DefaultTheme } from 'styled-components'

const colors: DefaultTheme['colors'] = {
    background: '#a3aaa9',
    text: '#000000',
    textLight: '#333333',
    accent: '#2b808e',
    lcd: {
        background: '#adab9d',
        border: '#89887b',
        text: '#5f5f55',
        textHighlight: '#36362f',
    },
    alternateMaterial: {
        background: '#b19b7f',
        backgroundLight: '#c4ad8f',
        backgroundDark: '#928069',
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
        mainGap: 1,
        enclosureBorderRadius: 0,
    },
    shadows: {
        lcdTextHighlight: 'none',
    },
    enclosure: {
        background: '#c1c7c7',
        backgroundLight: '#d8dcdc',
        backgroundDark: '#adb3b3',
        backgroundAlt: '#b7bdbd',
        border: '#b4bbbb',
        castShadow: `0 1px 1px rgba(0, 0, 0, 0.15),
            1px 5px 8px rgba(0, 0, 0, 0.1)`,
        innerCastShadowColor: `rgba(0, 0, 0, 0.1)`,
        innerCastShadowColorLight: `rgba(0, 0, 0, 0.05)`,
        innerCastShadowColorDark: `rgba(0, 0, 0, 0.15)`,
        sideThickness: 12,
    },
}
