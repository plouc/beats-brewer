import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        id: string
        name: string
        typography: {
            headingFont: string
            monospacedFont: string
        }
        colors: {
            background: string
            text: string
            textLight: string
            accent: string
            enclosure: {
                background: string
                border: string
            }
            lcd: {
                background: string
                border: string
                text: string
                textHighlight: string
            }
            alternateMaterial: {
                background: string
            }
        }
        sizes: {
            mainGap: number
            enclosureBorderRadius: number
        }
        shadows: {
            lcdTextHighlight: string
            enclosure: string
        }
    }
}
