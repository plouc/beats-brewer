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
            wood: string
            enclosureBorder: string
            enclosureBackground: string
            lcdBackground: string
            lcdBorder: string
            lcdText: string
            lcdHighlightText: string
        }
    }
}
