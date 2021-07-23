import styled, { css } from 'styled-components/macro'
import { lighten, darken } from 'polished'

export const RoundIconButton = styled.span<{
    isPressed?: boolean
    isInactive?: boolean
    hasNext?: boolean
    hasPrevious?: boolean
}>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;

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
                    0deg,
                    ${darken(0.02, theme.colors.enclosureBackground)},
                    ${theme.colors.enclosureBackground}
                );
                box-shadow: inset 0 1px 0 ${darken(0.06, theme.colors.enclosureBackground)};
            `
        }

        return css`
            background: linear-gradient(
                0deg,
                ${theme.colors.enclosureBackground},
                ${lighten(0.01, theme.colors.enclosureBackground)}
            );
            box-shadow: 0 1px 0 ${darken(0.08, theme.colors.enclosureBackground)},
                0 2px 4px ${darken(0.03, theme.colors.enclosureBackground)},
                inset 0 1px 0 ${lighten(0.06, theme.colors.enclosureBackground)};
        `
    }}
`
