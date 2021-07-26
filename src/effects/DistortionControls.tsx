import styled from 'styled-components/macro'
import { ChangeEvent, useCallback, useState } from 'react'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { EffectHeader } from './EffectHeader'
import { NumberInput } from '../ui/controls/NumberInput'
import { Distortion } from './definitions'
import { EffectWetControl } from './EffectWetControl'

interface DistortionControlsProps {
    distortion: Distortion
}

export const DistortionControls = ({ distortion: distortionEffect }: DistortionControlsProps) => {
    const [distortion, setDistortion] = useState<number>(distortionEffect.instance.distortion)
    const handleDistortionChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const newDistortion = Number(event.target.value)
            distortionEffect.instance.distortion = newDistortion
            setDistortion(newDistortion)
        },
        [setDistortion, distortionEffect.instance]
    )

    return (
        <Desk>
            <Enclosure>
                <EffectHeader effect={distortionEffect} />
                <Content>
                    <span>distortion</span>
                    <NumberInput
                        type="number"
                        onChange={handleDistortionChange}
                        value={distortion}
                        min={0}
                        max={1}
                        step={0.01}
                    />
                    <EffectWetControl effect={distortionEffect.instance} />
                </Content>
            </Enclosure>
        </Desk>
    )
}

const Content = styled.div`
    font-size: 12px;
    color: ${(props) => props.theme.colors.textLight};
    display: grid;
    align-items: center;
    grid-template-columns: 10ch 100px;
    grid-column-gap: 12px;
    grid-row-gap: 9px;
`
