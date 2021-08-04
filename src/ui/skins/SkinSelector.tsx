import { ChangeEvent, useCallback } from 'react'
import { useAppStore } from '../../store/useApp'
import { Select } from '../controls/Select'
import { skins } from './skins'
import { ControlGroup } from '../controls/ControlGroup'
import { ControlLabel } from '../controls/ControlLabel'

export const SkinSelector = () => {
    const currentSkin = useAppStore((state) => state.skin)
    const setSkin = useAppStore((state) => state.setSkin)
    const handleSelect = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            const newSkin = skins.find((t) => t.id === event.target.value)
            if (newSkin !== undefined) {
                setSkin(newSkin)
            }
        },
        [setSkin]
    )

    return (
        <ControlGroup>
            <ControlLabel htmlFor="skin">skin</ControlLabel>
            <Select id="skin" value={currentSkin.id} onChange={handleSelect}>
                {skins.map((skin) => (
                    <option key={skin.id} value={skin.id}>
                        {skin.name}
                    </option>
                ))}
            </Select>
        </ControlGroup>
    )
}
