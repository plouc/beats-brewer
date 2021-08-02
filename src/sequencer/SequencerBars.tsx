import styled from 'styled-components'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { HSpacer } from '../ui/Spacer'
import { LCDScreen, LCDScreenHighlightedText } from '../ui/LCDScreen'
import { RoundButton } from '../ui/controls/RoundButton'
import { useCallback } from 'react'

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
        <Container>
            <RoundButton onClick={handleMinus}>
                <FiMinus />
            </RoundButton>
            <HSpacer size="xsmall" />
            <Screen>
                Bars <Current>{bars}</Current>
            </Screen>
            <HSpacer size="xsmall" />
            <RoundButton onClick={handlePlus}>
                <FiPlus />
            </RoundButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Screen = styled(LCDScreen)`
    padding: 0 12px;
    display: flex;
    align-items: center;
    height: 28px;
`

const Current = styled(LCDScreenHighlightedText)`
    margin-left: 1ch;
`
