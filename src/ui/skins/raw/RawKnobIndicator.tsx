import styled from 'styled-components/macro'

export const RawKnobIndicator = ({ radius }: { radius: number }) => {
    return <Indicator radius={radius} y1={radius - 6} y2={radius} />
}

const Indicator = styled.line<{
    radius: number
}>`
    fill: none;
    stroke-width: 2px;
    stroke: ${(props) => props.theme.knob.indicatorColor};
`
