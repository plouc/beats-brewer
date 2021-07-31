import styled from 'styled-components/macro'

export const RackKnobTick = ({ radius, isMajor }: { radius: number; isMajor: boolean }) => {
    return <Tick isMajor={isMajor} y1={radius + 2} y2={radius + (isMajor ? 8 : 6)} />
}

const Tick = styled.line<{
    isMajor: boolean
}>`
    fill: none;
    stroke-width: 1px;
    stroke: ${(props) => props.theme.colors.textLight};
    opacity: ${(props) => (props.isMajor ? 1 : 0.5)};
`
