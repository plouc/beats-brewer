import styled from 'styled-components'
import { rgba } from 'polished'

export const LCDScreen = styled.div`
    background-color: ${(props) => props.theme.colors.lcdBackground};
    color: ${(props) => props.theme.colors.lcdText};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.lcdBorder},
        0 2px 3px rgba(0, 0, 0, 0.1) inset;
    border-radius: 3px;
    font-family: 'VT323', monospace;
    font-size: 16px;
`

export const LCDScreenHighlightedText = styled.span`
    color: ${(props) => props.theme.colors.lcdHighlightText};
    text-shadow: 0 0 6px ${(props) => rgba(props.theme.colors.lcdHighlightText, 0.6)};
`
