import styled from 'styled-components/macro'
import { darken } from 'polished'

export const ControlGroup = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    padding: 1px 1px 1px 0;
    border-radius: 3px;
    background-color: ${(props) => darken(0.12, props.theme.colors.background)};
    box-shadow: 0 1px 0 ${(props) => props.theme.enclosure.backgroundLight},
        0 -1px 0 ${(props) => props.theme.enclosure.backgroundDark};
`
