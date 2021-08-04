import styled from 'styled-components/macro'

export const ControlLabel = styled.label`
    font-size: 12px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    border-radius: 2px;
    margin-left: 1px;
    background-color: ${(props) => props.theme.enclosure.background};
    box-shadow: inset 0 1px 0 ${(props) => props.theme.enclosure.backgroundLight},
        inset 0 -1px 0 ${(props) => props.theme.enclosure.backgroundDark};
`
