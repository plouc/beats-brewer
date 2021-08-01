import { DefaultTheme } from 'styled-components'

export const convertToRawTheme = (baseTheme: DefaultTheme): DefaultTheme => {
    return {
        ...baseTheme,
        colors: {
            ...baseTheme.colors,
            lcd: {
                ...baseTheme.colors.lcd,
                background: baseTheme.enclosure.background,
                border: baseTheme.colors.text,
                text: baseTheme.colors.textLight,
                textHighlight: baseTheme.colors.text,
            },
            alternateMaterial: {
                ...baseTheme.colors.alternateMaterial,
                background: baseTheme.enclosure.background,
            },
        },
        enclosure: {
            ...baseTheme.enclosure,
        },
        knob: {
            ...baseTheme.knob,
            indicatorColor: baseTheme.colors.text,
        },
    }
}
