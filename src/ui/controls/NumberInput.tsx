import styled from 'styled-components/macro'
import { darken, lighten } from 'polished'

export const NumberInput = styled.input`
    font-family: ${(props) => props.theme.typography.monospacedFont};
    border: 1px solid ${(props) => props.theme.colors.enclosure.border};
    background-color: ${(props) => darken(0.04, props.theme.colors.enclosure.background)};
    color: ${(props) => props.theme.colors.textLight};
    padding: 5px 5px 5px 12px;
    cursor: pointer;
    font-size: 12px;

    &:focus {
        cursor: auto;
        outline: 0;
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => lighten(0.02, props.theme.colors.enclosure.background)};
        box-shadow: 0 0 0 1px ${(props) => props.theme.colors.enclosure.border};
    }
`
