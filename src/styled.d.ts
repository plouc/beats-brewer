import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        id: string
        name: string
        typography: {
            headingFont: string
            monospacedFont: string
        }
        enclosure: {
            background: string
            backgroundLight: string
            backgroundDark: string
            backgroundAlt: string
            border: string
            castShadow: string
            innerCastShadowColor: string
            innerCastShadowColorLight: string
            innerCastShadowColorDark: string
            sideThickness: number
        }
        lcd: {
            background: string
            border: string
            text: string
            textHighlight: string
            textHighlightGlow: string
            borderRadius: number
        }
        knob: {
            indicatorColor: string
        }
        colors: {
            background: string
            text: string
            textLight: string
            accent: string
            alternateMaterial: {
                background: string
                backgroundLight: string
                backgroundDark: string
            }
        }
        sizes: {
            mainGap: number
            enclosureBorderRadius: number
        }
    }
}
