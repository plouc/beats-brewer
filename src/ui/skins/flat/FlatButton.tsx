import styled, { css } from 'styled-components/macro'
import { darken, lighten, mix } from 'polished'

export const flatButtonBase = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    margin-left: 1px;
    cursor: pointer;
    border-radius: 2px;
`

export const flatButtonNormal = css`
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.enclosure.background};
    background-image: linear-gradient(
        180deg,
        ${(props) =>
            mix(0.4, props.theme.enclosure.background, props.theme.enclosure.backgroundLight)},
        ${(props) =>
            mix(0.8, props.theme.enclosure.background, props.theme.enclosure.backgroundDark)}
    );
    box-shadow: inset 0 1px 0 ${(props) => lighten(0.02, props.theme.enclosure.backgroundLight)},
        inset 0 -1px 0 ${(props) => props.theme.enclosure.backgroundDark};
`

export const flatButtonHover = css`
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.enclosure.background};
    background-image: linear-gradient(
        180deg,
        ${(props) => lighten(0.02, props.theme.enclosure.background)},
        ${(props) => props.theme.enclosure.background}
    );
    box-shadow: inset 0 1px 1px ${(props) => props.theme.enclosure.innerCastShadowColorLight},
        inset 0 1px 1px ${(props) => props.theme.enclosure.innerCastShadowColorLight};
`

export const flatButtonPressed = css`
    color: ${(props) => mix(0.66, props.theme.colors.text, props.theme.enclosure.background)};
    background-color: ${(props) => props.theme.enclosure.background};
    background-image: linear-gradient(
        180deg,
        ${(props) => darken(0.02, props.theme.enclosure.background)},
        ${(props) => props.theme.enclosure.background}
    );
    box-shadow: inset 0 1px 1px ${(props) => props.theme.enclosure.innerCastShadowColor},
        inset 0 3px 4px ${(props) => props.theme.enclosure.innerCastShadowColorLight};
`

export const FlatButton = styled.div<{
    isPressed?: boolean
    isInactive?: boolean
}>`
    ${flatButtonBase}
    padding: 0 11px;
    font-size: 11px;

    ${(props) => (props.isPressed ? flatButtonPressed : flatButtonNormal)}

    &:hover {
        ${flatButtonHover}
    }
`
