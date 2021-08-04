import styled from 'styled-components'
import { lighten, darken, rgba } from 'polished'

export const LCDScreen = styled.div`
    position: relative;
    background-color: ${(props) => props.theme.lcd.background};
    color: ${(props) => props.theme.lcd.text};
    border-radius: 1px;
    box-shadow: inset 1px 0 0 ${(props) => darken(0.04, props.theme.lcd.background)},
        inset -1px 0 0 ${(props) => darken(0.04, props.theme.lcd.background)},
        inset 0 1px 0 ${(props) => darken(0.04, props.theme.lcd.background)},
        inset 0 2px 0 ${(props) => rgba(lighten(0.3, props.theme.lcd.background), 0.4)},
        inset 0 -1px 0 ${(props) => rgba(lighten(0.3, props.theme.lcd.background), 0.3)},
        inset 0 8px 12px ${(props) => darken(0.04, props.theme.lcd.background)},
        inset 0 2px 3px rgba(0, 0, 0, 0.1);
    font-family: 'VT323', monospace;
    font-size: 16px;
`

export const LCDScreenHighlightedText = styled.span`
    color: ${(props) => props.theme.lcd.textHighlight};
    text-shadow: ${(props) => props.theme.lcd.textHighlightGlow};
`
