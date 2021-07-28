import { ChangeEvent, useCallback, useState } from 'react'
import * as Tone from 'tone'
import { FiDroplet } from 'react-icons/fi'
import { NumberInput } from '../ui/controls/NumberInput'
import { SliderControl } from '../ui/controls/SliderControl'
import { HSpacer } from '../ui/Spacer'
import { EffectControlLabel } from './EffectControlLabel'
import { EffectControlWithSlider } from './EffectControlWithSlider'

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
            <EffectControlWithSlider
                label={
                    <EffectControlLabel>
                        <FiDroplet />
                        <HSpacer size="xsmall" />
                        wet
                    </EffectControlLabel>
                }
                value={
                    <NumberInput
                        type="number"
                        onChange={handleChange}
                        value={wet}
                        min={0}
                        max={1}
                        step={0.05}
                    />
                }
                slider={<SliderControl value={wet} tickStep={0.1} majorTickStep={1} />}
            />
        </>
    )
}
