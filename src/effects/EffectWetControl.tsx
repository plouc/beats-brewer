import { ChangeEvent, useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import * as Tone from 'tone'
import { NumberInput } from '../ui/controls/NumberInput'
import { SliderControl } from '../ui/controls/SliderControl'

interface EffectWetControlProps {
    effect: Tone.Reverb | Tone.Distortion
}

export const EffectWetControl = ({ effect }: EffectWetControlProps) => {
    const [wet, setWet] = useState(effect.wet.value)

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const newWet = Number(event.target.value)
            effect.wet.value = newWet
            setWet(newWet)
        },
        [setWet, effect]
    )

    return (
        <>
            <span>wet</span>
            <NumberInput
                type="number"
                onChange={handleChange}
                value={wet}
                min={0}
                max={1}
                step={0.05}
            />
            <SliderContainer>
                <SliderControl />
            </SliderContainer>
        </>
    )
}

const SliderContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
`
