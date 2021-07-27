import { DefaultTheme } from 'styled-components'
import { darken, lighten, rgba } from 'polished'

const textColors = {
    light: {
        main: '#fff',
        light: '#ddd',
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

    return {
        id: `mono:${colorName}`,
        name: `mono: ${colorName}`,
        typography: {
            headingFont: `'Montserrat', sans-serif`,
            monospacedFont: `'IBM Plex Mono', monospace`,
        },
        colors: {
            background: darken(0.3, color),
            text: textColor.main,
            textLight: darken(0.25, color),
            accent: textColor.main,
            lcd: {
                background: darken(0.06, color),
                border: lighten(0.03, color),
                text: textColor.light,
                textHighlight: textColor.main,
            },
            alternateMaterial: {
                background: '#888888',
                backgroundLight: '#b6b6b6',
                backgroundDark: '#6a6a6a',
            },
        },
        sizes: {
            mainGap: 2,
            enclosureBorderRadius: 1,
        },
        shadows: {
            lcdTextHighlight: 'none',
        },
        enclosure: {
            background: color,
            backgroundLight: lighten(0.08, color),
            backgroundDark: darken(0.08, color),
            backgroundAlt: lighten(0.04, color),
            border: color,
            castShadow: `0 3px 0 2px ${darken(0.35, color)}`,
            innerCastShadowColor: rgba(darken(0.8, color), 0.16),
            innerCastShadowColorLight: rgba(darken(0.8, color), 0.12),
            innerCastShadowColorDark: rgba(darken(0.8, color), 0.2),
            sideThickness: 8,
        },
    }
}
