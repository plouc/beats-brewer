import styled from 'styled-components'

export const Select = styled.select`
    height: 32px;
    font-size: 12px;
    color: inherit;
    padding: 4px 7px;
    border-radius: 2px;
    background-color: #2d2d2d;
    border: 1px solid #242425;
    cursor: pointer;
    font-family: ${(props) => props.theme.typography.monospacedFont};

    &:focus {
        cursor: auto;
        outline: 0;
        background-color: #242425;
    }
`
