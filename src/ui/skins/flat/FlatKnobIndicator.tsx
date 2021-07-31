import styled from 'styled-components/macro'
import { darken } from 'polished'

export const FlatKnobIndicator = ({ radius }: { radius: number }) => {
    return <Indicator radius={radius} y1={0} y2={radius - 2} />
}

const Indicator = styled.line<{
    radius: number
}>`
    fill: none;
    stroke-width: ${(props) => (props.radius > 16 ? 2 : 1)}px;
    stroke: ${(props) => darken(0.08, props.theme.colors.alternateMaterial.backgroundDark)};
    stroke-linecap: round;
`
