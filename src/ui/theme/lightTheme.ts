import { DefaultTheme } from 'styled-components'

const colors: DefaultTheme['colors'] = {
    background: '#aaa9ac',
    text: '#000000',
    textLight: '#333333',
    accent: '#2b808e',
    alternateMaterial: {
        background: '#b3c1c1',
        backgroundLight: '#d5e3e0',
        backgroundDark: '#a9a4b3',
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
        enclosureBorderRadius: 2,
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
        sideThickness: 10,
    },
    lcd: {
        background: '#adab9d',
        border: '#89887b',
        text: '#5f5f55',
        textHighlight: '#36362f',
        textHighlightGlow: 'none',
        borderRadius: 3,
    },
    knob: {
        indicatorColor: '#2a656f',
    },
}
