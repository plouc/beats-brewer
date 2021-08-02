import styled, { css } from 'styled-components/macro'
import { lighten, darken, rgba, mix } from 'polished'

export const RackButton = styled.div<{
    isPressed?: boolean
    isInactive?: boolean
    hasNext?: boolean
    hasPrevious?: boolean
}>`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 11px;
    font-family: ${(props) => props.theme.typography.monospacedFont};
    font-size: 11px;
    height: 26px;
    cursor: pointer;
    user-select: none;

    border-radius: ${(props) => {
        if (props.hasPrevious && props.hasNext) return 0
        if (props.hasPrevious) return `0 2px 2px 0`
        if (props.hasNext) return `2px 0 0 2px`
        return `2px`
    }};

    ${({ theme, isInactive }) => {
        if (isInactive) {
            return css`
                color: ${theme.colors.textLight};

                &:hover {
                    color: ${theme.colors.text};
                }
            `
        }

        return css`
            color: ${theme.colors.text};
        `
    }};

    ${({ theme, isPressed }) => {
        if (isPressed) {
            return css`
                background: linear-gradient(
                    180deg,
                    ${darken(0.01, theme.enclosure.background)},
                    ${theme.enclosure.background}
                );
                box-shadow: inset 0 1px 0 ${darken(0.06, theme.enclosure.background)},
                    inset 0 2px 0 ${darken(0.08, theme.enclosure.background)},
                    inset 0 4px 4px ${rgba(darken(0.2, theme.enclosure.background), 0.25)},
                    0 0 0 1px ${lighten(0.02, theme.enclosure.background)};
            `
        }

        return css`
            background-color: ${theme.enclosure.background};
            background-image: linear-gradient(
                180deg,
                ${mix(0.6, theme.enclosure.background, theme.enclosure.backgroundLight)},
                ${theme.enclosure.background}
            );
            box-shadow: 0 0 0 1px ${theme.enclosure.innerCastShadowColorDark},
                inset 0 1px 0 ${theme.enclosure.backgroundLight},
                inset 0 -1px 0 ${theme.enclosure.backgroundDark},
                0 3px 3px ${theme.enclosure.innerCastShadowColorLight};

            &:hover {
                background-color: ${lighten(0.02, theme.enclosure.background)};
                box-shadow: 0 0 0 1px ${theme.enclosure.innerCastShadowColor},
                    inset 0 1px 0 ${lighten(0.06, theme.enclosure.backgroundLight)},
                    inset 0 -1px 0 ${theme.enclosure.background},
                    0 0 5px ${theme.enclosure.innerCastShadowColorLight};
            }
        `
    }}
`
