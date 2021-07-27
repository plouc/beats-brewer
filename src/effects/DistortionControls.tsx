import styled from 'styled-components/macro'
import { ChangeEvent, useCallback, useState } from 'react'
import { FiActivity } from 'react-icons/fi'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { EffectHeader } from './EffectHeader'
import { NumberInput } from '../ui/controls/NumberInput'
import { Distortion } from './definitions'
import { EffectWetControl } from './EffectWetControl'
import { SliderControl } from '../ui/controls/SliderControl'
import { HSpacer } from '../ui/Spacer'

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
                    <Label>
                        <FiActivity />
                        <HSpacer size="xsmall" />
                        distortion
                    </Label>
                    <NumberInput
                        type="number"
                        onChange={handleDistortionChange}
                        value={distortion}
                        min={0}
                        max={1}
                        step={0.01}
                    />
                    <SliderContainer>
                        <SliderControl value={distortion} tickStep={0.1} majorTickStep={1} />
                    </SliderContainer>
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
    grid-template-columns: auto 90px;
    grid-column-gap: 12px;
    grid-row-gap: 9px;
`

const SliderContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
`

const Label = styled.span`
    display: flex;
    align-items: center;
`
