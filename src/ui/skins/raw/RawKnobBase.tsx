import styled from 'styled-components/macro'

export const RawKnobBase = styled.div<{
    radius: number
}>`
    position: absolute;
    background-color: ${(props) => props.theme.colors.alternateMaterial.background};
    width: ${(props) => props.radius * 2}px;
    height: ${(props) => props.radius * 2}px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.text};

    &:after {
        content: '';
        position: absolute;
        background-color: ${(props) => props.theme.enclosure.backgroundLight};
        top: 6px;
        left: 6px;
        width: ${(props) => props.radius * 2 - 12}px;
        height: ${(props) => props.radius * 2 - 12}px;
        border-radius: 50%;
        border: 1px solid ${(props) => props.theme.colors.text};
    }
`
