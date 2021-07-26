import styled from 'styled-components'

export const LCDScreen = styled.div`
    background-color: ${(props) => props.theme.colors.lcd.background};
    color: ${(props) => props.theme.colors.lcd.text};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.lcd.border},
        0 2px 3px rgba(0, 0, 0, 0.1) inset;
    border-radius: 3px;
    font-family: 'VT323', monospace;
    font-size: 16px;
`

export const LCDScreenHighlightedText = styled.span`
    color: ${(props) => props.theme.colors.lcd.textHighlight};
    text-shadow: ${(props) => props.theme.shadows.lcdTextHighlight};
`
