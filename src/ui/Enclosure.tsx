import styled from 'styled-components'

export const Enclosure = styled.div`
    box-shadow: 0 0 0 6px ${(props) => props.theme.colors.enclosureBorder} inset,
        0 6px 0 ${(props) => props.theme.colors.enclosureSide}, 3px 6px 9px rgba(0, 0, 0, 0.35);
    background-color: ${(props) => props.theme.colors.enclosureBackground};
    border-radius: 6px;
    padding: 6px;
`
