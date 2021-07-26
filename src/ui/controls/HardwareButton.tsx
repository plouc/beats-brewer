import styled, { css } from 'styled-components/macro'
import { lighten, darken, rgba } from 'polished'

export const HardwareButton = styled.span<{
    isPressed?: boolean
    isInactive?: boolean
    hasNext?: boolean
    hasPrevious?: boolean
}>`
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
        if (props.hasPrevious) return `0 3px 3px 0`
        if (props.hasNext) return `3px 0 0 3px`
        return `3px`
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
                    ${darken(0.01, theme.colors.enclosureBackground)},
                    ${theme.colors.enclosureBackground}
                );
                box-shadow: inset 0 1px 0 ${darken(0.06, theme.colors.enclosureBackground)},
                    inset 0 2px 0 ${darken(0.08, theme.colors.enclosureBackground)},
                    inset 0 4px 4px ${rgba(darken(0.2, theme.colors.enclosureBackground), 0.25)},
                    0 0 0 1px ${lighten(0.02, theme.colors.enclosureBackground)};
            `
        }

        return css`
            background: ${theme.colors.enclosureBackground};
            box-shadow: inset 0 -1px 0 ${darken(0.04, theme.colors.enclosureBackground)},
                0 2px 4px ${rgba(darken(0.2, theme.colors.enclosureBackground), 0.25)},
                inset 0 1px 0 ${lighten(0.08, theme.colors.enclosureBackground)},
                0 1px 0 1px ${darken(0.02, theme.colors.enclosureBackground)};

            &:hover {
                box-shadow: inset 0 -1px 0 ${darken(0.03, theme.colors.enclosureBackground)},
                    0 1px 2px ${rgba(darken(0.2, theme.colors.enclosureBackground), 0.25)},
                    inset 0 1px 0 ${lighten(0.06, theme.colors.enclosureBackground)},
                    0 0 0 1px ${darken(0.02, theme.colors.enclosureBackground)};
            }
        `
    }}
`
