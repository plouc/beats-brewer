import { useCallback } from 'react'
import styled, { css } from 'styled-components/macro'
import { darken, lighten, rgba } from 'polished'
import { TrackWithPlayer } from './useStepSequencer'

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
    const handleToggle = useCallback(() => {
        onToggle(index)
    }, [onToggle, index])

    return (
        <StepElement
            color={color}
            isActive={isActive}
            isPlaying={isPlaying}
            isOdd={index % 8 >= 4}
            onClick={handleToggle}
            isMuted={isMuted}
        />
    )
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

const StepElement = styled.div<{
    color: string
    isActive: boolean
    isPlaying: boolean
    isOdd: boolean
    isMuted: boolean
}>`
    position: relative;
    border-radius: 2px;
    height: 24px;
    cursor: pointer;
    opacity: ${(props) => (props.isMuted ? 0.5 : 1)};

    &:after {
        content: '';
        background-color: ${(props) => props.theme.enclosure.background};
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        margin-left: -2px;
        margin-top: -2px;
        border-radius: 2px;
        transform: translate3d(0, 5px, 0);
        opacity: 0;
        transition: transform 400ms, opacity 400ms;
    }

    ${({ theme, color, isActive, isPlaying, isOdd }) => {
        if (isActive) {
            if (isPlaying) {
                return css`
                    background-color: ${lighten(0.15, color)};
                    box-shadow: inset 0 -1px 0 ${color}, inset 0 1px 0 ${lighten(0.15, color)},
                        0 0 3px 2px ${rgba(color, 0.35)};

                    &:after {
                        transform: translate3d(0, -5px, 0);
                        opacity: 1;
                    }
                `
            }

            return css`
                background-color: ${color};
                box-shadow: inset 0 -1px 0 ${darken(0.2, color)},
                    0 1px 3px ${rgba(darken(0.3, theme.enclosure.background), 0.66)},
                    inset 0 1px 0 ${lighten(0.15, color)};

                &:after {
                    transform: translate3d(0, -5px, 0);
                    opacity: 1;
                }
            `
        }

        if (isOdd) {
            return css`
                background-color: ${lighten(0.05, theme.enclosure.background)};
                border: 1px solid ${darken(0.03, theme.enclosure.background)};

                &:hover {
                    background-color: ${rgba(color, 0.8)};
                }
            `
        }

        return css`
            background-color: ${lighten(0.1, theme.enclosure.background)};
            border: 1px solid ${darken(0.03, theme.enclosure.background)};

            &:hover {
                background-color: ${rgba(color, 0.8)};
            }
        `
    }}
`
