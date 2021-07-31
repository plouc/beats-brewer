import styled from 'styled-components/macro'

export const FlatKnobTick = ({ radius, isMajor }: { radius: number; isMajor: boolean }) => {
    return <Tick isMajor={isMajor} cy={radius + 6} r={isMajor ? 1.5 : 1} />
}

const Tick = styled.circle<{
    isMajor: boolean
}>`
    fill: ${(props) => props.theme.colors.textLight};
    opacity: ${(props) => (props.isMajor ? 0.8 : 0.6)};
`
