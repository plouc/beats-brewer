import styled, { css } from 'styled-components/macro'

export const RawButton = styled.div<{
    isPressed?: boolean
    isInactive?: boolean
}>`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 11px;
    font-family: ${(props) => props.theme.typography.monospacedFont};
    font-size: 11px;
    height: 28px;
    cursor: pointer;
    user-select: none;
    border-radius: 2px;
    margin-left: 1px;

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
                background-color: ${theme.enclosure.backgroundDark};
            `
        }

        return css`
            background-color: ${theme.enclosure.backgroundLight};

            &:hover {
                background-color: ${theme.colors.text};
                color: ${theme.enclosure.background};
            }
        `
    }}
`
