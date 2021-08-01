import styled, { css } from 'styled-components/macro'
import { darken, lighten, rgba } from 'polished'

export const RackStepStep = styled.div<{
    color: string
    isActive: boolean
    isPlaying: boolean
    isOdd: boolean
    isMuted: boolean
}>`
    position: relative;
    border-radius: 2px;
    height: 24px;
    cursor: pointer;
    opacity: ${(props) => (props.isMuted ? 0.5 : 1)};

    &:after {
        content: '';
        background-color: ${(props) => darken(0.3, props.color)};
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        margin-left: -2px;
        margin-top: -2px;
        border-radius: 2px;
        transform: translate3d(0, 5px, 0);
        opacity: 0;
        transition: transform 400ms, opacity 400ms;
    }

    ${({ theme, color, isActive, isPlaying, isOdd }) => {
        if (isActive) {
            if (isPlaying) {
                return css`
                    background-color: ${lighten(0.15, color)};
                    box-shadow: inset 0 -1px 0 ${color}, inset 0 1px 0 ${lighten(0.15, color)},
                        0 0 3px 2px ${rgba(color, 0.35)};

                    &:after {
                        transform: translate3d(0, -5px, 0);
                        opacity: 1;
                    }
                `
            }

            return css`
                background-color: ${color};
                box-shadow: inset 0 -1px 0 ${darken(0.2, color)},
                    0 1px 3px ${rgba(darken(0.3, theme.enclosure.background), 0.66)},
                    inset 0 1px 0 ${lighten(0.15, color)};

                &:after {
                    transform: translate3d(0, -5px, 0);
                    opacity: 1;
                }
            `
        }

        if (isOdd) {
            return css`
                background-color: ${lighten(0.05, theme.enclosure.background)};

                &:hover {
                    background-color: ${rgba(color, 0.8)};
                }
            `
        }

        return css`
            background-color: ${lighten(0.1, theme.enclosure.background)};

            &:hover {
                background-color: ${rgba(color, 0.8)};
            }
        `
    }}
`
