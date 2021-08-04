import styled from 'styled-components'

export const Select = styled.select`
    height: 28px;
    font-size: 12px;
    color: inherit;
    padding: 4px 7px;
    border-radius: 2px;
    background-color: ${(props) => props.theme.enclosure.backgroundDark};
    border: none;
    cursor: pointer;
    font-family: ${(props) => props.theme.typography.monospacedFont};
    margin-left: 1px;

    &:first-child {
        margin-left: 0;
    }

    &:focus {
        cursor: auto;
        outline: 0;
        background-color: ${(props) => props.theme.enclosure.backgroundLight};
    }
`
