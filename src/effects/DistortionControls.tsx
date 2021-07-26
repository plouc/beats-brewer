import styled from 'styled-components/macro'
import { ChangeEvent, useCallback, useState } from 'react'
import { VSpacer } from '../ui/Spacer'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { CloseButton } from '../ui/controls/CloseButton'
import { NumberInput } from '../ui/controls/NumberInput'
import { Distortion } from './definitions'
import { useAppStore } from '../useApp'
import { EffectWetControl } from './EffectWetControl'

interface DistortionControlsProps {
    distortion: Distortion
}

export const DistortionControls = ({ distortion: distortionEffect }: DistortionControlsProps) => {
    const closeEffect = useAppStore((state) => state.closeEffect)
    const handleClose = useCallback(() => {
        closeEffect(distortionEffect.id)
    }, [closeEffect, distortionEffect.id])

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
                <Header>
                    <ComponentName>
                        <ComponentNameHighlight>Distortion</ComponentNameHighlight>
                    </ComponentName>
                    <CloseButton onClose={handleClose} />
                </Header>
                <VSpacer size="small" />
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

const Header = styled(ComponentHeader)`
    justify-content: space-between;
`

const Content = styled.div`
    width: 218px;
    padding: 0 9px 12px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.textLight};
    display: grid;
    align-items: center;
    grid-template-columns: 10ch auto;
    grid-column-gap: 12px;
    grid-row-gap: 9px;
`
