import styled from 'styled-components/macro'
import { darken } from 'polished'

export const RackSliderTrack = styled.div`
    position: absolute;
    top: calc(50% - 2px);
    left: -2px;
    width: calc(100% + 4px);
    height: 4px;
    background-color: ${(props) => props.theme.enclosure.backgroundDark};
    border-radius: 2px;
    box-shadow: inset 0 1px 0 ${(props) => darken(0.1, props.theme.enclosure.backgroundDark)},
        0 -1px 0 ${(props) => props.theme.enclosure.backgroundDark},
        0 1px 0 ${(props) => props.theme.enclosure.backgroundLight};
`
