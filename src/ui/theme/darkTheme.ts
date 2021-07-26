import { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
    id: 'dark',
    name: 'Dark Theme',
    typography: {
        headingFont: `'Montserrat', sans-serif`,
        monospacedFont: `'IBM Plex Mono', monospace`,
    },
    colors: {
        background: '#242425',
        text: '#ffffff',
        textLight: '#888888',
        accent: '#7bb392',
        wood: '#402a1a',
        enclosureBorder: '#242425',
        enclosureBackground: '#2d2d2d',
        lcdBackground: '#4c151a',
        lcdBorder: '#311716',
        lcdText: '#a14638',
        lcdHighlightText: '#dd6755',
    },
}
