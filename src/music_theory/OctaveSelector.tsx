import { useCallback } from 'react'
import styled from 'styled-components'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { HSpacer } from '../ui/Spacer'
import { LCDScreen, LCDScreenHighlightedText } from '../ui/LCDScreen'
import { useKeyboardShortcut } from '../ui/hooks/useKeyboardShortcuts'
import { RoundIconButton } from '../ui/controls/RoundIconButton'
import { Octave } from './definitions'

interface OctaveSelectorProps {
    current: Octave
    onChange: (octave: Octave) => void
}

export const OctaveSelector = ({ current, onChange }: OctaveSelectorProps) => {
    useKeyboardShortcut(['o', '1'], () => onChange(1))
    useKeyboardShortcut(['o', '2'], () => onChange(2))
    useKeyboardShortcut(['o', '3'], () => onChange(3))
    useKeyboardShortcut(['o', '4'], () => onChange(4))
    useKeyboardShortcut(['o', '5'], () => onChange(5))
    useKeyboardShortcut(['o', '6'], () => onChange(6))
    useKeyboardShortcut(['o', '7'], () => onChange(7))
    useKeyboardShortcut(['o', '8'], () => onChange(8))

    const handlePrevious = useCallback(() => {
        if (current > 1) onChange((current - 1) as Octave)
    }, [current, onChange])

    const handleNext = useCallback(() => {
        if (current < 8) onChange((current + 1) as Octave)
    }, [current, onChange])

    return (
        <Container>
            <RoundIconButton onClick={handlePrevious}>
                <FiMinus />
            </RoundIconButton>
            <HSpacer size="xsmall" />
            <Label>
                <span>Octave</span>
                <Current>{current}</Current>
            </Label>
            <HSpacer size="xsmall" />
            <RoundIconButton onClick={handleNext}>
                <FiPlus />
            </RoundIconButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    color: rgba(255, 255, 255, 0.35);
`

const Label = styled(LCDScreen)`
    padding: 0 9px;
    display: flex;
    align-items: center;
    height: 28px;
    font-family: 'VT323', monospace;
    font-size: 16px;
`

const Current = styled(LCDScreenHighlightedText)`
    margin-left: 1ch;
`
