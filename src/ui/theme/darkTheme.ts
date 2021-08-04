import { DefaultTheme } from 'styled-components'
import { darken, rgba } from 'polished'

const colors: DefaultTheme['colors'] = {
    background: '#171717',
    text: '#ffffff',
    textLight: '#888888',
    accent: '#7bb392',
    alternateMaterial: {
        background: '#402a1a',
        backgroundLight: '#573924',
        backgroundDark: '#362418',
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
        mainGap: 1,
        enclosureBorderRadius: 2,
    },
    enclosure: {
        background: '#2d2d2d',
        backgroundLight: '#393939',
        backgroundDark: '#242424',
        backgroundAlt: '#242424',
        border: '#242425',
        castShadow: `0 1px 2px ${rgba(darken(0.2, colors.background), 0.15)},
            1px 2px 5px ${rgba(darken(0.2, colors.background), 0.15)},
            3px 6px 12px ${rgba(darken(0.2, colors.background), 0.25)}`,
        innerCastShadowColor: rgba(darken(0.2, '#2d2d2d'), 0.3),
        innerCastShadowColorLight: rgba(darken(0.2, '#2d2d2d'), 0.2),
        innerCastShadowColorDark: rgba(darken(0.2, '#2d2d2d'), 0.4),
        sideThickness: 12,
    },
    lcd: {
        background: '#4c151a',
        text: '#a14638',
        textHighlight: '#dd6755',
        textHighlightGlow: `0 0 6px ${rgba('#dd6755', 0.6)}`,
    },
    knob: {
        indicatorColor: '#24170b',
    },
}
