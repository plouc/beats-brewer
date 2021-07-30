import { ChangeEvent, useCallback, useState } from 'react'
import * as Tone from 'tone'
import { FiDroplet } from 'react-icons/fi'
import { NumberInput } from '../ui/controls/NumberInput'
import { Slider } from '../ui/controls/Slider'
import { HSpacer } from '../ui/Spacer'
import { EffectControlLabel } from './EffectControlLabel'
import { EffectControlWithSlider } from './EffectControlWithSlider'

interface EffectWetControlProps {
    effect: Tone.Reverb | Tone.Distortion
}

export const EffectWetControl = ({ effect }: EffectWetControlProps) => {
    const [wet, setWet] = useState(effect.wet.value)

    const handleValueChange = useCallback(
        (value: number) => {
            effect.wet.value = value
            setWet(value)
        },
        [effect, setWet]
    )

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            handleValueChange(Number(event.target.value))
        },
        [handleValueChange]
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
                slider={
                    <Slider
                        value={wet}
                        onChange={handleValueChange}
                        tickStep={0.1}
                        majorTickStep={1}
                    />
                }
            />
        </>
    )
}
