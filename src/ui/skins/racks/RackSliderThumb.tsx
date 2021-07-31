import styled from 'styled-components/macro'
import { lighten, darken } from 'polished'

export const RackSliderThumb = styled.div<{ x: number }>`
    position: absolute;
    top: calc(50% - 7px);
    left: ${(props) => props.x}px;
    margin-left: -12px;
    width: 24px;
    height: 14px;
    background-color: ${(props) => lighten(0.03, props.theme.colors.alternateMaterial.background)};
    border-radius: 2px;
    cursor: pointer;
    box-shadow: inset 0 -1px 0 ${(props) => props.theme.colors.alternateMaterial.background},
        inset -1px 0 0 ${(props) => props.theme.colors.alternateMaterial.backgroundDark},
        inset 1px 0 0 ${(props) => props.theme.colors.alternateMaterial.backgroundLight},
        inset 0 3px 0 ${(props) => props.theme.colors.alternateMaterial.backgroundLight},
        inset 0 4px 0
            ${(props) => lighten(0.08, props.theme.colors.alternateMaterial.backgroundLight)},
        inset 0 -3px 0 ${(props) => props.theme.colors.alternateMaterial.backgroundDark},
        inset 0 -4px 0 ${(props) => darken(0.04, props.theme.colors.alternateMaterial.backgroundDark)},
        0 0 0 1px ${(props) => props.theme.enclosure.innerCastShadowColorDark},
        0 4px 2px ${(props) => props.theme.enclosure.innerCastShadowColor};
`
