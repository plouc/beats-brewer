import styled from 'styled-components/macro'
import { lighten } from 'polished'

export const FlatKnobIndicator = ({ radius }: { radius: number }) => {
    return <Indicator radius={radius} y1={0} y2={radius} />
}

const Indicator = styled.line<{
    radius: number
}>`
    fill: none;
    stroke-width: ${(props) => (props.radius > 16 ? 2 : 1)}px;
    stroke: ${(props) => lighten(0.06, props.theme.colors.alternateMaterial.backgroundLight)};
    stroke-linecap: round;
`
