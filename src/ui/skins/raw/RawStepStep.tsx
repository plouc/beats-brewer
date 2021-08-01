import styled, { css } from 'styled-components/macro'
import { mix, lighten, rgba, darken } from 'polished'

export const RawStepStep = styled.div<{
    color: string
    isActive: boolean
    isPlaying: boolean
    isOdd: boolean
    isMuted: boolean
}>`
    position: relative;
    border-radius: 1px;
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
                    box-shadow: 0 0 0 1px ${lighten(0.15, color)};

                    &:after {
                        transform: translate3d(0, -5px, 0);
                        opacity: 1;
                    }
                `
            }

            return css`
                background-color: ${color};

                &:after {
                    transform: translate3d(0, -5px, 0);
                    opacity: 1;
                }
            `
        }

        if (isOdd) {
            return css`
                background-color: ${mix(0.85, theme.enclosure.background, theme.colors.background)};

                &:hover {
                    background-color: ${rgba(color, 0.66)};
                }
            `
        }

        return css`
            background-color: ${mix(0.7, theme.enclosure.background, theme.colors.background)};

            &:hover {
                background-color: ${rgba(color, 0.66)};
            }
        `
    }}
`
