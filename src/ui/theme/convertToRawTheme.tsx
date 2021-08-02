import { DefaultTheme } from 'styled-components'
import { darken, lighten } from 'polished'

export const convertToRawTheme = (baseTheme: DefaultTheme): DefaultTheme => {
    return {
        ...baseTheme,
        colors: {
            ...baseTheme.colors,
            alternateMaterial: {
                ...baseTheme.colors.alternateMaterial,
                background: baseTheme.enclosure.background,
            },
        },
        enclosure: {
            ...baseTheme.enclosure,
            backgroundLight: lighten(0.03, baseTheme.enclosure.background),
            backgroundDark: darken(0.03, baseTheme.enclosure.background),
        },
        lcd: {
            ...baseTheme.lcd,
            textHighlightGlow: 'none',
        },
        knob: {
            ...baseTheme.knob,
            indicatorColor: baseTheme.colors.text,
        },
    }
}
