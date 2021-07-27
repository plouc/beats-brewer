import styled from 'styled-components/macro'

export const NumberInput = styled.input`
    font-family: ${(props) => props.theme.typography.monospacedFont};
    border: 1px solid ${(props) => props.theme.enclosure.backgroundAlt};
    background-color: ${(props) => props.theme.enclosure.backgroundAlt};
    color: ${(props) => props.theme.colors.textLight};
    padding: 5px 5px 5px 12px;
    cursor: pointer;
    font-size: 12px;
    border-radius: 2px;
    font-weight: 500;

    &:focus {
        cursor: auto;
        outline: 0;
        color: ${(props) => props.theme.colors.text};
        box-shadow: 0 0 0 2px ${(props) => props.theme.enclosure.backgroundAlt};
    }
`
