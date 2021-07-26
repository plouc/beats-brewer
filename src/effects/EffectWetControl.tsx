import { ChangeEvent, useCallback, useState } from 'react'
import * as Tone from 'tone'

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
            <input type="number" onChange={handleChange} value={wet} min={0} max={1} step={0.05} />
        </>
    )
}
