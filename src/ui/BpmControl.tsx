import { ChangeEvent, useCallback } from 'react'
import styled from 'styled-components/macro'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { HSpacer } from './Spacer'
import { Select } from './controls/Select'
import { RoundIconButton } from './controls/RoundIconButton'
import { LCDScreen, LCDScreenHighlightedText } from './LCDScreen'
import { useAppStore } from '../useApp'

const genresBpm: [string, number][] = [
    ['Reggae/R&B', 60],
    ['Down-tempo', 70],
    ['Hip-hop', 85],
    ['Chill-out', 90],
    ['Pop/Metal', 100],
    ['Rock', 110],
    ['House', 118],
    ['Jazz & Funk/Techno', 120],
    ['Trance', 130],
    ['Dubstep/Trap', 140],
    ['Jungle', 155],
    ['Drum and Bass', 165],
]

export const BpmControl = () => {
    const bpm = useAppStore((state) => state.bpm)
    const setBpm = useAppStore((state) => state.setBpm)

    const handleMinus = useCallback(() => {
        setBpm(Math.max(1, bpm - 1))
    }, [bpm, setBpm])

    const handlePlus = useCallback(() => {
        setBpm(Math.min(522, bpm + 1))
    }, [bpm, setBpm])

    const handleSelect = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            if (event.target.value === '') return
            setBpm(Number(event.target.value))
        },
        [setBpm]
    )

    const currentGenre = genresBpm.find(([_, genreBpm]) => genreBpm === bpm)

    return (
        <Container>
            <RoundIconButton onClick={handleMinus}>
                <FiMinus />
            </RoundIconButton>
            <HSpacer size="small" />
            <Screen>
                BPM <Current>{bpm.toFixed(2).padStart(6, ' ')}</Current>
            </Screen>
            <HSpacer size="small" />
            <RoundIconButton onClick={handlePlus}>
                <FiPlus />
            </RoundIconButton>
            <HSpacer size="small" />
            <Select onChange={handleSelect} value={currentGenre ? currentGenre[1] : ''}>
                <option value="">-----</option>
                {genresBpm.map(([genre, genreBpm]) => (
                    <option key={genre} value={genreBpm}>
                        {genre} {genreBpm}BPM
                    </option>
                ))}
            </Select>
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
    white-space: pre;
`
