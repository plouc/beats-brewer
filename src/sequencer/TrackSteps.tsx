import { useCallback } from 'react'
import styled, { css } from 'styled-components/macro'
import { darken, lighten, rgba } from 'polished'

interface TrackStepsProps {
    sampleId: string
    color: string
    steps: boolean[]
    toggleStep: (sampleId: string, index: number) => void
}

export const TrackSteps = ({ sampleId, color, steps, toggleStep }: TrackStepsProps) => {
    const handleToggle = useCallback(
        (index: number) => {
            toggleStep(sampleId, index)
        },
        [toggleStep, sampleId]
    )

    return (
        <Grid steps={steps.length}>
            {steps.map((step, index) => {
                return (
                    <Step
                        key={index}
                        index={index}
                        color={color}
                        isActive={step}
                        onToggle={handleToggle}
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
    onToggle: (index: number) => void
}

const Step = ({ index, color, isActive, onToggle }: StepProps) => {
    const handleToggle = useCallback(() => {
        onToggle(index)
    }, [onToggle, index])

    return (
        <StepElement
            color={color}
            isActive={isActive}
            isOdd={index % 8 >= 4}
            onClick={handleToggle}
        />
    )
}

const Grid = styled.div<{
    steps: number
}>`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(${(props) => props.steps}, 14px);
    grid-column-gap: 5px;
    height: 32px;
`

const StepElement = styled.div<{
    color: string
    isActive: boolean
    isOdd: boolean
}>`
    position: relative;
    border-radius: 2px;
    height: 24px;
    cursor: pointer;

    &:after {
        content: '';
        background-color: ${(props) => props.theme.colors.enclosureBackground};
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

    ${({ theme, color, isActive, isOdd }) => {
        if (isActive) {
            return css`
                background-color: ${color};
                box-shadow: 0 2px 0 ${darken(0.2, color)},
                    0 3px 3px ${rgba(darken(0.3, theme.colors.enclosureBackground), 0.66)},
                    inset 0 1px 0 ${lighten(0.15, color)};

                &:after {
                    transform: translate3d(0, -5px, 0);
                    opacity: 1;
                }
            `
        }

        if (isOdd) {
            return css`
                background-color: ${lighten(0.05, theme.colors.enclosureBackground)};
                border: 1px solid ${darken(0.03, theme.colors.enclosureBackground)};

                &:hover {
                    background-color: ${rgba(color, 0.8)};
                }
            `
        }

        return css`
            background-color: ${lighten(0.1, theme.colors.enclosureBackground)};
            border: 1px solid ${darken(0.03, theme.colors.enclosureBackground)};

            &:hover {
                background-color: ${rgba(color, 0.8)};
            }
        `
    }}
`
