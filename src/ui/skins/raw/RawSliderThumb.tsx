import styled from 'styled-components/macro'

export const RawSliderThumb = styled.div<{ x: number }>`
    position: absolute;
    top: calc(50% - 7px);
    left: ${(props) => props.x}px;
    margin-left: -12px;
    width: 24px;
    height: 14px;
    background-color: ${(props) => props.theme.enclosure.background};
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 2px;
    cursor: pointer;
    box-shadow: 0 0 0 2px ${(props) => props.theme.enclosure.background};
`
