import styled from 'styled-components/macro'

export const FlatKnobTick = ({ radius, isMajor }: { radius: number; isMajor: boolean }) => {
    return <Tick isMajor={isMajor} cy={radius + 6} r={1.5} />
}

const Tick = styled.circle<{
    isMajor: boolean
}>`
    fill: ${(props) => props.theme.colors.textLight};
    opacity: ${(props) => (props.isMajor ? 0.8 : 0.4)};
`
