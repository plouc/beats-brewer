import styled from 'styled-components/macro'

export const RawSliderTrack = styled.div`
    position: absolute;
    top: calc(50% - 2px);
    left: -2px;
    width: calc(100% + 4px);
    height: 4px;
    background-color: ${(props) => props.theme.enclosure.background};
    border-radius: 2px;
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.textLight};
`
