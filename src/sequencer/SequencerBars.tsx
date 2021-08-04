import { useCallback } from 'react'
import styled from 'styled-components'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { LCDScreen, LCDScreenHighlightedText } from '../ui/LCDScreen'
import { RoundButton } from '../ui/controls/RoundButton'
import { ControlGroup } from '../ui/controls/ControlGroup'

interface SequencerBarsProps {
    bars: number
    setBars: (bars: number) => void
}

export const SequencerBars = ({ bars, setBars }: SequencerBarsProps) => {
    const handleMinus = useCallback(() => {
        setBars(Math.max(1, bars - 1))
    }, [setBars, bars])

    const handlePlus = useCallback(() => {
        setBars(bars + 1)
    }, [setBars, bars])

    return (
        <ControlGroup>
            <RoundButton onClick={handleMinus}>
                <FiMinus />
            </RoundButton>
            <Screen>
                Bars <Current>{bars}</Current>
            </Screen>
            <RoundButton onClick={handlePlus}>
                <FiPlus />
            </RoundButton>
        </ControlGroup>
    )
}

const Screen = styled(LCDScreen)`
    padding: 0 12px;
    display: flex;
    align-items: center;
    height: 28px;
    margin-left: 1px;
`

const Current = styled(LCDScreenHighlightedText)`
    margin-left: 1ch;
`
