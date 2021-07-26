import styled from 'styled-components'
import { darken, lighten, rgba } from 'polished'

export const Select = styled.select`
    height: 32px;
    font-size: 12px;
    color: inherit;
    padding: 4px 7px;
    border-radius: 2px;
    background-color: ${(props) => props.theme.colors.enclosure.background};
    border: 1px solid ${(props) => darken(0.08, props.theme.colors.enclosure.background)};
    cursor: pointer;
    font-family: ${(props) => props.theme.typography.monospacedFont};
    box-shadow: 0 1px 2px
        ${(props) => rgba(darken(0.1, props.theme.colors.enclosure.background), 0.35)};

    &:focus {
        cursor: auto;
        outline: 0;
        background-color: ${(props) => lighten(0.03, props.theme.colors.enclosure.background)};
    }
`
