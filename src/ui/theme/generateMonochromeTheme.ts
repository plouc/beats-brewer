import { DefaultTheme } from 'styled-components'
import { darken, lighten, rgba, mix } from 'polished'

const textColors = {
    light: {
        main: '#fff',
        light: '#ccc',
    },
    dark: {
        main: '#000',
        light: '#222',
    },
} as const

export const generateMonochromeTheme = (
    color: string,
    colorName: string,
    text: keyof typeof textColors
): DefaultTheme => {
    const textColor = textColors[text]
    const indicatorColor = darken(0.1, color)

    return {
        id: `mono:${colorName}`,
        name: `mono: ${colorName}`,
        typography: {
            headingFont: `'Montserrat', sans-serif`,
            monospacedFont: `'IBM Plex Mono', monospace`,
        },
        colors: {
            background: darken(0.25, color),
            text: textColor.main,
            textLight: textColor.light,
            accent: textColor.main,
            alternateMaterial: {
                background: '#888888',
                backgroundLight: '#b6b6b6',
                backgroundDark: mix(0.5, '#6a6a6a', darken(0.1, color)),
            },
        },
        sizes: {
            mainGap: 2,
            enclosureBorderRadius: 1,
        },
        knob: {
            indicatorColor,
        },
        enclosure: {
            background: color,
            backgroundLight: lighten(0.08, color),
            backgroundDark: darken(0.08, color),
            backgroundAlt: lighten(0.04, color),
            border: color,
            castShadow: `0 3px 0 2px ${rgba(darken(0.35, color), 0.35)}`,
            innerCastShadowColor: rgba(darken(0.8, color), 0.2),
            innerCastShadowColorLight: rgba(darken(0.8, color), 0.16),
            innerCastShadowColorDark: rgba(darken(0.8, color), 0.24),
            sideThickness: 8,
        },
        lcd: {
            background: darken(0.06, color),
            border: lighten(0.03, color),
            text: textColor.light,
            textHighlight: textColor.main,
            textHighlightGlow: 'none',
        },
    }
}
