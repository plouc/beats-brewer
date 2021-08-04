import styled from 'styled-components'

export const LCDScreen = styled.div`
    background-color: ${(props) => props.theme.lcd.background};
    color: ${(props) => props.theme.lcd.text};
    border-radius: 1px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1) inset;
    font-family: 'VT323', monospace;
    font-size: 16px;
`

export const LCDScreenHighlightedText = styled.span`
    color: ${(props) => props.theme.lcd.textHighlight};
    text-shadow: ${(props) => props.theme.lcd.textHighlightGlow};
`
