import { DefaultTheme } from 'styled-components'
import { darken } from 'polished'

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
            background: darken(0.35, color),
            text: textColor.main,
            textLight: textColor.light,
            accent: textColor.main,
            enclosure: {
                background: color,
                border: color,
            },
            lcd: {
                background: color,
                border: textColor.main,
                text: textColor.light,
                textHighlight: textColor.main,
            },
            alternateMaterial: {
                background: color,
            },
        },
        sizes: {
            mainGap: 2,
            enclosureBorderRadius: 2,
        },
        shadows: {
            lcdTextHighlight: 'none',
            enclosure: 'none',
        },
    }
}
