import React, { ChangeEvent, useCallback } from 'react'
import { Select } from '../ui/controls/Select'
import { SYNTH_TYPES, SynthType } from './definitions'

interface SynthSelectorProps {
    synth: SynthType
    onChange: (synth: SynthType) => void
}

export const SynthSelector = ({ synth, onChange }: SynthSelectorProps) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            onChange(event.target.value)
        },
        [onChange]
    )

    return (
        <Select
            value={synth}
            onChange={handleChange}
            style={{
                textTransform: 'capitalize',
            }}
        >
            {SYNTH_TYPES.map((synthType) => {
                return (
                    <option key={synthType} value={synthType}>
                        {synthType}
                    </option>
                )
            })}
        </Select>
    )
}
