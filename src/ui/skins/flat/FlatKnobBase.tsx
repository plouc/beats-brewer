import styled from 'styled-components/macro'
import { darken, lighten, mix } from 'polished'

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
    box-shadow: 0 1px 0 0
            ${(props) =>
                mix(
                    0.5,
                    props.theme.colors.alternateMaterial.backgroundDark,
                    props.theme.enclosure.background
                )},
        0 0 2px 1px ${(props) => props.theme.enclosure.innerCastShadowColorDark},
        0 5px 3px -3px ${(props) => props.theme.enclosure.innerCastShadowColorDark},
        0 ${(props) => props.radius * 0.3}px 1px
            ${(props) => props.theme.enclosure.innerCastShadowColorLight};

    &:after {
        content: '';
        position: absolute;
        background-color: ${(props) => props.theme.colors.alternateMaterial.background};
        background: linear-gradient(
            180deg,
            ${(props) => props.theme.colors.alternateMaterial.backgroundLight},
            ${(props) => props.theme.colors.alternateMaterial.background}
        );
        top: 1px;
        left: 1px;
        width: ${(props) => props.radius * 2 - 2}px;
        height: ${(props) => props.radius * 2 - 2}px;
        border-radius: 50%;
        border: 1px solid
            ${(props) => darken(0.04, props.theme.colors.alternateMaterial.backgroundDark)};
    }
`
