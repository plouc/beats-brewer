import { DefaultTheme } from 'styled-components'
import { darken, rgba } from 'polished'

const colors: DefaultTheme['colors'] = {
    background: '#242425',
    text: '#ffffff',
    textLight: '#888888',
    accent: '#7bb392',
    enclosure: {
        background: '#2d2d2d',
        border: '#242425',
    },
    lcd: {
        background: '#4c151a',
        border: '#311716',
        text: '#a14638',
        textHighlight: '#dd6755',
    },
    alternateMaterial: {
        background: '#402a1a',
    },
}

export const darkTheme: DefaultTheme = {
    id: 'dark',
    name: 'Dark Theme',
    typography: {
        headingFont: `'Montserrat', sans-serif`,
        monospacedFont: `'IBM Plex Mono', monospace`,
    },
    colors,
    sizes: {
        mainGap: 12,
        enclosureBorderRadius: 2,
    },
    shadows: {
        lcdTextHighlight: `0 0 6px ${rgba(colors.lcd.textHighlight, 0.6)}`,
        enclosure: `0 1px 2px ${rgba(darken(0.2, colors.background), 0.15)},
            1px 2px 5px ${rgba(darken(0.2, colors.background), 0.15)},
            3px 6px 12px ${rgba(darken(0.2, colors.background), 0.25)}`,
    },
}
