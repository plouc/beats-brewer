import styled from 'styled-components/macro'
import { useMemo } from 'react'

interface SequencerTimelineProps {
    steps: number
    current: number
}

export const SequencerTimeline = ({ steps, current }: SequencerTimelineProps) => {
    const stepIndexes = useMemo(() => {
        return Array.from({ length: steps }).map((_, index) => index)
    }, [steps])

    return (
        <Container steps={steps}>
            {stepIndexes.map((index) => {
                return <Step key={index} isCurrent={index === current} />
            })}
        </Container>
    )
}

const Container = styled.div<{
    steps: number
}>`
    height: 3px;
    margin-bottom: 7px;
    display: grid;
    grid-template-columns: repeat(${(props) => props.steps}, 14px);
    grid-column-gap: 5px;
`

const Step = styled.span<{
    isCurrent: boolean
}>`
    height: 3px;
    background-color: ${(props) => props.theme.colors.accent};
    opacity: ${(props) => (props.isCurrent ? 1 : 0.3)};
    box-shadow: ${(props) => {
        if (!props.isCurrent) return 'none'
        return `0 0 5px ${props.theme.colors.accent}`
    }};
`
