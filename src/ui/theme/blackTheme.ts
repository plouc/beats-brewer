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
        background: '#111111',
        backgroundLight: '#222222',
        backgroundDark: '#000000',
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
        enclosureBorderRadius: 4,
    },
    shadows: {
        lcdTextHighlight: `0 0 6px ${rgba(colors.lcd.textHighlight, 0.6)}`,
    },
    enclosure: {
        background: '#111111',
        backgroundLight: '#222222',
        backgroundDark: '#000000',
        backgroundAlt: '#111111',
        border: '#242425',
        castShadow: `0 1px 2px ${rgba(darken(0.2, colors.background), 0.15)},
            1px 2px 5px ${rgba(darken(0.2, colors.background), 0.15)},
            3px 6px 12px ${rgba(darken(0.2, colors.background), 0.25)}`,
        innerCastShadowColor: rgba(darken(0.2, '#2d2d2d'), 0.15),
        innerCastShadowColorLight: rgba(darken(0.2, '#2d2d2d'), 0.1),
        innerCastShadowColorDark: rgba(darken(0.2, '#2d2d2d'), 0.2),
        sideThickness: 12,
    },
}
