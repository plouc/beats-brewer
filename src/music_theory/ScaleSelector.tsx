import React, { ChangeEvent, useCallback } from 'react'
import { ScaleDictionary } from '@tonaljs/tonal'
import { Select } from '../ui/controls/Select'

interface ScaleSelectorProps {
    scale: any
    onChange: (scale: any) => void
}

export const ScaleSelector = ({ scale, onChange }: ScaleSelectorProps) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            onChange(event.target.value)
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
            {ScaleDictionary.names().map((scale) => {
                return (
                    <option key={scale} value={scale}>
                        {scale}
                    </option>
                )
            })}
        </Select>
    )
}
