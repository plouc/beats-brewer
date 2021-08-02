import styled from 'styled-components'

export const LCDScreen = styled.div`
    background-color: ${(props) => props.theme.lcd.background};
    color: ${(props) => props.theme.lcd.text};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.lcd.border},
        0 2px 3px rgba(0, 0, 0, 0.1) inset;
    border-radius: 3px;
    font-family: 'VT323', monospace;
    font-size: 16px;
`

export const LCDScreenHighlightedText = styled.span`
    color: ${(props) => props.theme.lcd.textHighlight};
    text-shadow: ${(props) => props.theme.lcd.textHighlightGlow};
`
