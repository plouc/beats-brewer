import styled from 'styled-components/macro'
import { lighten } from 'polished'

export const RackSliderTrackFill = styled.div<{
    width: number
}>`
    position: absolute;
    top: calc(50% - 2px);
    left: -2px;
    width: ${(props) => props.width + 2}px;
    height: 4px;
    background-color: ${(props) => lighten(0.02, props.theme.enclosure.backgroundLight)};
    border-radius: 2px 0 0 2px;
    box-shadow: inset 0 1px 1px ${(props) => props.theme.enclosure.background};
`
