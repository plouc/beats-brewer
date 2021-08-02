import styled, { css } from 'styled-components/macro'

export const RawButton = styled.div<{
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
    border: 1px solid ${(props) => props.theme.colors.text};
    border-left-width: ${(props) => (props.hasPrevious ? 0 : 1)}px;

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
