import styled from 'styled-components/macro'
import { lighten, mix } from 'polished'

export const FlatSliderThumb = styled.div<{ x: number }>`
    position: absolute;
    top: calc(50% - 7px);
    left: ${(props) => props.x}px;
    margin-left: -12px;
    width: 24px;
    height: 14px;
    background-color: ${(props) => props.theme.colors.alternateMaterial.background};
    background: linear-gradient(
        180deg,
        ${(props) => props.theme.colors.alternateMaterial.backgroundLight},
        ${(props) => props.theme.colors.alternateMaterial.background}
    );
    border-radius: 2px;
    cursor: pointer;
    box-shadow: inset 0 1px 0
            ${(props) => lighten(0.1, props.theme.colors.alternateMaterial.backgroundLight)},
        0 1px 0 0
            ${(props) =>
                mix(
                    0.5,
                    props.theme.colors.alternateMaterial.backgroundDark,
                    props.theme.enclosure.background
                )},
        0 0 2px 1px ${(props) => props.theme.enclosure.innerCastShadowColorLight},
        0 5px 3px -3px ${(props) => props.theme.enclosure.innerCastShadowColorDark},
        0 5px 1px ${(props) => props.theme.enclosure.innerCastShadowColorLight};
`
