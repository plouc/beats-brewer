import styled from 'styled-components/macro'
import { lighten, darken } from 'polished'

export const RackKnobBase = styled.div<{
    radius: number
}>`
    position: absolute;
    background-color: ${(props) => props.theme.enclosure.backgroundDark};
    width: ${(props) => props.radius * 2}px;
    height: ${(props) => props.radius * 2}px;
    border-radius: ${(props) => props.radius}px;
    box-shadow: inset 0 1px 1px ${(props) => darken(0.15, props.theme.enclosure.backgroundDark)};

    &:before {
        content: '';
        position: absolute;
        background-color: ${(props) => props.theme.enclosure.background};
        background: linear-gradient(
            180deg,
            ${(props) => props.theme.colors.alternateMaterial.backgroundLight},
            ${(props) => darken(0.04, props.theme.colors.alternateMaterial.backgroundDark)}
        );
        top: 3px;
        left: 3px;
        width: ${(props) => props.radius * 2 - 6}px;
        height: ${(props) => props.radius * 2 - 6}px;
        border-radius: ${(props) => props.radius}px;
        box-shadow: inset 0 1px 0
                ${(props) => lighten(0.1, props.theme.colors.alternateMaterial.backgroundLight)},
            inset 0 -1px 0 ${(props) => darken(0.02, props.theme.colors.alternateMaterial.background)},
            0 2px 1px ${(props) => props.theme.enclosure.innerCastShadowColorDark},
            0 7px 5px ${(props) => props.theme.enclosure.innerCastShadowColorDark};
    }

    &:after {
        content: '';
        position: absolute;
        z-index: 2;
        width: ${(props) => (props.radius * 2 - 6) * 0.7}px;
        height: ${(props) => (props.radius * 2 - 6) * 0.7}px;
        top: ${(props) => (props.radius * 2 - 6) * 0.15 + 3}px;
        left: ${(props) => (props.radius * 2 - 6) * 0.15 + 3}px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.alternateMaterial.background};
        box-shadow: 0 -3px 3px ${(props) => lighten(0.1, props.theme.colors.alternateMaterial.backgroundLight)};
    }
`
