import { ChangeEvent, useCallback } from 'react'
import { useAppStore } from '../../useApp'
import { Select } from '../controls/Select'
import { skins } from './skins'
import styled from 'styled-components/macro'
import { HSpacer } from '../Spacer'

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
        <Container>
            <Label htmlFor="skin">skin</Label>
            <HSpacer size="small" />
            <Select id="skin" value={currentSkin.id} onChange={handleSelect}>
                {skins.map((skin) => (
                    <option key={skin.id} value={skin.id}>
                        {skin.name}
                    </option>
                ))}
            </Select>
        </Container>
    )
}

const Label = styled.label`
    font-size: 12px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
`
