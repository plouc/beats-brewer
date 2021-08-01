import styled from 'styled-components/macro'

export const RawKnobTick = ({ radius, isMajor }: { radius: number; isMajor: boolean }) => {
    return <Tick isMajor={isMajor} cy={radius + 6} r={isMajor ? 2 : 1} />
}

const Tick = styled.circle<{
    isMajor: boolean
}>`
    fill: ${(props) => props.theme.colors.text};
`
