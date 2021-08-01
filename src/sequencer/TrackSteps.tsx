import { createElement, useCallback } from 'react'
import styled from 'styled-components/macro'
import { TrackWithPlayer } from './useStepSequencer'
import { useAppStore } from '../store/useApp'

interface TrackStepsProps {
    track: TrackWithPlayer
    currentStep: number
    toggleStep: (sampleId: string, index: number) => void
}

export const TrackSteps = ({ track, currentStep, toggleStep }: TrackStepsProps) => {
    const handleToggle = useCallback(
        (index: number) => {
            toggleStep(track.id, index)
        },
        [toggleStep, track.id]
    )

    return (
        <Grid steps={track.steps.length}>
            {track.steps.map((step, index) => {
                return (
                    <Step
                        key={index}
                        index={index}
                        color={track.color}
                        isActive={step === 1}
                        isPlaying={step === 1 && currentStep === index}
                        onToggle={handleToggle}
                        isMuted={track.isMuted}
                    />
                )
            })}
        </Grid>
    )
}

interface StepProps {
    index: number
    color: string
    isActive: boolean
    isPlaying: boolean
    onToggle: (index: number) => void
    isMuted: boolean
}

const Step = ({ index, color, isActive, isPlaying, onToggle, isMuted }: StepProps) => {
    const skin = useAppStore((state) => state.skin)

    const handleToggle = useCallback(() => {
        onToggle(index)
    }, [onToggle, index])

    return createElement(skin.step.step, {
        color,
        isActive,
        isPlaying,
        isOdd: index % 8 >= 4,
        onClick: handleToggle,
        isMuted,
    })
}

const Grid = styled.div<{
    steps: number
}>`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(${(props) => props.steps}, 14px);
    grid-column-gap: 4px;
    height: 32px;
`
