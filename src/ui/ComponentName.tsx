import styled from 'styled-components'

export const ComponentName = styled.div`
    font-family: ${(props) => props.theme.typography.headingFont};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    color: #666;
`

export const ComponentNameHighlight = styled.span`
    color: ${(props) => props.theme.colors.accent};
`
