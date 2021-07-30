import { ChangeEvent, useCallback, useState } from 'react'
import { FiActivity } from 'react-icons/fi'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { EffectHeader } from './EffectHeader'
import { NumberInput } from '../ui/controls/NumberInput'
import { Distortion } from './definitions'
import { EffectWetControl } from './EffectWetControl'
import { Slider } from '../ui/controls/Slider'
import { HSpacer, VSpacer } from '../ui/Spacer'
import { EffectControlLabel } from './EffectControlLabel'
import { EffectControlWithSlider } from './EffectControlWithSlider'

interface DistortionControlsProps {
    distortion: Distortion
}

export const DistortionControls = ({ distortion: distortionEffect }: DistortionControlsProps) => {
    const [distortion, setDistortion] = useState<number>(distortionEffect.instance.distortion)
    const handleDistortionValueChange = useCallback(
        (value: number) => {
            distortionEffect.instance.distortion = value
            setDistortion(value)
        },
        [setDistortion, distortionEffect.instance]
    )
    const handleDistortionChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            handleDistortionValueChange(Number(event.target.value))
        },
        [handleDistortionValueChange]
    )

    return (
        <Desk>
            <Enclosure>
                <EffectHeader effect={distortionEffect} />
                <EffectControlWithSlider
                    label={
                        <EffectControlLabel>
                            <FiActivity />
                            <HSpacer size="xsmall" />
                            distortion
                        </EffectControlLabel>
                    }
                    value={
                        <NumberInput
                            type="number"
                            onChange={handleDistortionChange}
                            value={distortion}
                            min={0}
                            max={1}
                            step={0.01}
                        />
                    }
                    slider={
                        <Slider
                            value={distortion}
                            step={0.01}
                            precision={2}
                            tickStep={0.1}
                            majorTickStep={1}
                            onChange={handleDistortionValueChange}
                        />
                    }
                />
                <VSpacer />
                <EffectWetControl effect={distortionEffect.instance} />
            </Enclosure>
        </Desk>
    )
}
