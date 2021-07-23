import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import * as Tone from 'tone'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { HSpacer } from './Spacer'
import { RoundIconButton } from './controls/RoundIconButton'
import { LCDScreen, LCDScreenHighlightedText } from './LCDScreen'

export const BpmControl = () => {
    const [bpm, setBpm] = useState(130)

    const handleMinus = useCallback(() => {
        setBpm((previous) => Math.max(1, previous - 1))
    }, [setBpm])

    const handlePlus = useCallback(() => {
        setBpm((previous) => Math.min(522, previous + 1))
    }, [setBpm])

    useEffect(() => {
        Tone.Transport.bpm.value = bpm
    }, [bpm])

    return (
        <Container>
            <RoundIconButton onClick={handleMinus}>
                <FiMinus />
            </RoundIconButton>
            <HSpacer size="small" />
            <Screen>
                BPM <Current>{bpm.toFixed(2)}</Current>
            </Screen>
            <HSpacer size="small" />
            <RoundIconButton onClick={handlePlus}>
                <FiPlus />
            </RoundIconButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Screen = styled(LCDScreen)`
    display: flex;
    align-items: center;
    height: 28px;
    padding: 0 12px;
`

const Current = styled(LCDScreenHighlightedText)`
    margin-left: 1ch;
`
