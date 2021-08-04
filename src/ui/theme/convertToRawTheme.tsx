import { DefaultTheme } from 'styled-components'
import { darken, lighten } from 'polished'

export const convertToRawTheme = (baseTheme: DefaultTheme): DefaultTheme => {
    const backgroundLight = lighten(0.03, baseTheme.enclosure.background)
    const backgroundDark = darken(0.03, baseTheme.enclosure.background)

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
            backgroundLight,
            backgroundDark,
        },
        lcd: {
            ...baseTheme.lcd,
            background: backgroundDark,
            textHighlightGlow: 'none',
        },
        knob: {
            ...baseTheme.knob,
            indicatorColor: baseTheme.colors.text,
        },
    }
}
