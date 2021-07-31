import styled from 'styled-components/macro'
import { darken } from 'polished'

export const RackKnobIndicator = ({ radius }: { radius: number }) => {
    return <Indicator cy={(radius - 3) * 0.36} r={1.5} />
}

const Indicator = styled.circle`
    fill: ${(props) => darken(0.15, props.theme.colors.alternateMaterial.backgroundDark)};
`
