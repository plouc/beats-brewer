import styled from 'styled-components/macro'
import { darken, lighten } from 'polished'

export const FlatKnobBase = styled.div<{
    radius: number
}>`
    position: absolute;
    background-color: ${(props) => props.theme.colors.alternateMaterial.background};
    background: linear-gradient(
        180deg,
        ${(props) => lighten(0.04, props.theme.colors.alternateMaterial.backgroundLight)},
        ${(props) => props.theme.colors.alternateMaterial.background}
    );
    width: ${(props) => props.radius * 2}px;
    height: ${(props) => props.radius * 2}px;
    border-radius: 50%;
    box-shadow: 0 0 2px 1px ${(props) => props.theme.enclosure.innerCastShadowColorDark},
        0 ${(props) => props.radius * 0.3}px 1px
            ${(props) => props.theme.enclosure.innerCastShadowColorLight};

    &:before {
        content: '';
        position: absolute;
        background-color: ${(props) =>
            darken(0.04, props.theme.colors.alternateMaterial.backgroundDark)};
        top: 1px;
        left: 1px;
        width: ${(props) => props.radius * 2 - 2}px;
        height: ${(props) => props.radius * 2 - 2}px;
        border-radius: 50%;
    }

    &:after {
        content: '';
        position: absolute;
        background-color: ${(props) => props.theme.colors.alternateMaterial.background};
        background: linear-gradient(
            180deg,
            ${(props) => lighten(0.04, props.theme.colors.alternateMaterial.background)},
            ${(props) => props.theme.colors.alternateMaterial.background}
        );
        top: 2px;
        left: 2px;
        width: ${(props) => props.radius * 2 - 4}px;
        height: ${(props) => props.radius * 2 - 4}px;
        border-radius: 50%;
    }
`
