import styled, { css } from 'styled-components/macro'
import { lighten, darken, mix } from 'polished'
import { flatButtonBase, flatButtonNormal, flatButtonHover, flatButtonPressed } from './FlatButton'

export const FlatRoundButton = styled.div<{
    isPressed?: boolean
    isInactive?: boolean
}>`
    ${flatButtonBase}
    font-size: 10px;
    width: 28px;
    color: ${(props) =>
        props.isPressed
            ? mix(0.66, props.theme.colors.text, props.theme.enclosure.background)
            : props.theme.colors.text};

    &:before {
        position: absolute;
        z-index: -2;
        content: '';
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        background-color: ${(props) => props.theme.enclosure.background};

        ${(props) => (props.isPressed ? flatButtonPressed : flatButtonNormal)}
    }

    &:after {
        position: absolute;
        z-index: -1;
        content: '';
        width: 18px;
        height: 18px;
        top: calc(50% - 9px);
        left: calc(50% - 9px);
        border-radius: 50%;
        background-color: ${(props) => props.theme.enclosure.background};
        box-shadow: 0 -2px 3px ${(props) => lighten(0.08, props.theme.enclosure.backgroundLight)},
            0 3px 2px ${(props) => lighten(0, props.theme.enclosure.backgroundDark)};

        ${(props) => {
            if (props.isPressed) {
                return css`
                    background: linear-gradient(
                        180deg,
                        ${darken(0.04, props.theme.enclosure.background)},
                        ${lighten(0.02, props.theme.enclosure.background)}
                    );
                    box-shadow: 0 -2px 3px ${lighten(0.04, props.theme.enclosure.background)},
                        0 2px 3px 2px ${darken(0.04, props.theme.enclosure.backgroundDark)};
                `
            }

            return css`
                background-image: linear-gradient(
                    180deg,
                    ${(props) =>
                        mix(
                            0.6,
                            props.theme.enclosure.background,
                            props.theme.enclosure.backgroundLight
                        )},
                    ${(props) => props.theme.enclosure.background}
                );
                box-shadow: 0 -2px 3px ${lighten(0.08, props.theme.enclosure.backgroundLight)},
                    0 3px 2px ${props.theme.enclosure.backgroundDark};
            `
        }}
    }

    &:hover {
        color: ${(props) => props.theme.colors.text};

        &:before {
            ${flatButtonHover}
        }

        &:after {
            background-image: linear-gradient(
                180deg,
                ${(props) =>
                    mix(
                        0.6,
                        props.theme.enclosure.background,
                        props.theme.enclosure.backgroundLight
                    )},
                ${(props) => props.theme.enclosure.background}
            );
            box-shadow: 0 -2px 3px ${(props) => lighten(0.08, props.theme.enclosure.backgroundLight)},
                0 3px 2px ${(props) => props.theme.enclosure.backgroundDark};
        }
    }
`
