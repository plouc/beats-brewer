import styled from 'styled-components/macro'

export const EffectControlLabel = styled.span`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    font-size: 12px;
    color: ${(props) => props.theme.colors.text};
    white-space: nowrap;

    svg {
        color: ${(props) => props.theme.colors.accent};
    }
`
