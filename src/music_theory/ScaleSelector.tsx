import React, { ChangeEvent, useCallback } from 'react'
import { Scale, get as getScale } from '@tonaljs/scale'
import { Select } from '../ui/controls/Select'

interface ScaleSelectorProps {
    scale: Scale
    onChange: (scale: Scale) => void
}

const SCALES: Scale[] = [getScale('C major'), getScale('C minor')]

console.log(SCALES)

export const ScaleSelector = ({ scale, onChange }: ScaleSelectorProps) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            onChange(getScale(event.target.value))
        },
        [onChange]
    )

    return (
        <Select
            value={scale.name}
            onChange={handleChange}
            style={{
                textTransform: 'capitalize',
            }}
        >
            {SCALES.map((scale) => {
                return (
                    <option key={scale.name} value={scale.name}>
                        {scale.name}
                    </option>
                )
            })}
        </Select>
    )
}
