import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {
            headingFont: string
            monospacedFont: string
        }
        colors: {
            background: string
            text: string
            textLight: string
            accent: string
            enclosureBorder: string
            enclosureBackground: string
            enclosureSide: string
            lcdBackground: string
            lcdBorder: string
            lcdText: string
            lcdHighlightText: string
        }
    }
}
