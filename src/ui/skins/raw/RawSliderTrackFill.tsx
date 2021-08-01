import styled from 'styled-components/macro'

export const RawSliderTrackFill = styled.div<{
    width: number
}>`
    position: absolute;
    top: calc(50% - 2px);
    left: -2px;
    width: ${(props) => props.width + 2}px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.text};
    border-radius: 2px 0 0 2px;
`
