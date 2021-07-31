import { DefaultTheme } from 'styled-components'
import { darken, rgba } from 'polished'

const colors: DefaultTheme['colors'] = {
    background: '#000000',
    text: '#cccccc',
    textLight: '#888888',
    accent: '#eeeeee',
    lcd: {
        background: '#000000',
        border: '#000000',
        text: '#888888',
        textHighlight: '#eeeeee',
    },
    alternateMaterial: {
        background: '#232323',
        backgroundLight: '#2a2a2a',
        backgroundDark: '#181818',
    },
}

export const blackTheme: DefaultTheme = {
    id: 'black',
    name: 'Black Theme',
    typography: {
        headingFont: `'Montserrat', sans-serif`,
        monospacedFont: `'IBM Plex Mono', monospace`,
    },
    colors,
    sizes: {
        mainGap: 2,
        enclosureBorderRadius: 1,
    },
    shadows: {
        lcdTextHighlight: `0 0 6px ${rgba(colors.lcd.textHighlight, 0.6)}`,
    },
    enclosure: {
        background: '#1b1b1b',
        backgroundLight: '#222222',
        backgroundDark: '#101010',
        backgroundAlt: '#111111',
        border: '#242425',
        castShadow: `0 1px 2px rgba(0, 0, 0, .8)`,
        innerCastShadowColor: `rgba(0, 0, 0, .5)`,
        innerCastShadowColorLight: `rgba(0, 0, 0, .4)`,
        innerCastShadowColorDark: `rgba(0, 0, 0, .6)`,
        sideThickness: 10,
    },
}
