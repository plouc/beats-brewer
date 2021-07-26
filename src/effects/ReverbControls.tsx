import styled from 'styled-components/macro'
import { ChangeEvent, useCallback, useState } from 'react'
import { VSpacer } from '../ui/Spacer'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { CloseButton } from '../ui/controls/CloseButton'
import { Reverb } from './definitions'
import { useAppStore } from '../useApp'
import { EffectWetControl } from './EffectWetControl'

interface ReverbControlsProps {
    reverb: Reverb
}

export const ReverbControls = ({ reverb }: ReverbControlsProps) => {
    const closeEffect = useAppStore((state) => state.closeEffect)
    const handleClose = useCallback(() => {
        closeEffect(reverb.id)
    }, [closeEffect, reverb.id])

    const [preDelay, setPreDelay] = useState<number>(reverb.instance.preDelay as number)
    const handlePreDelayChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const newPreDelay = Number(event.target.value)
            reverb.instance.preDelay = newPreDelay
            setPreDelay(newPreDelay)
        },
        [setPreDelay, reverb.instance]
    )

    const [decay, setDecay] = useState<number>(reverb.instance.decay as number)
    const handleDecayChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const newDecay = Number(event.target.value)
            reverb.instance.decay = newDecay
            setDecay(newDecay)
        },
        [setDecay, reverb.instance]
    )

    return (
        <Desk>
            <Enclosure>
                <Header>
                    <ComponentName>
                        <ComponentNameHighlight>Reverb</ComponentNameHighlight>
                    </ComponentName>
                    <CloseButton onClose={handleClose} />
                </Header>
                <VSpacer size="small" />
                <Content>
                    <span>decay</span>
                    <input
                        type="number"
                        onChange={handleDecayChange}
                        value={decay}
                        min={0.001}
                        step={0.001}
                    />
                    <span>pre delay</span>
                    <input
                        type="number"
                        onChange={handlePreDelayChange}
                        value={preDelay}
                        min={0}
                        step={0.05}
                    />
                    <EffectWetControl effect={reverb.instance} />
                </Content>
            </Enclosure>
        </Desk>
    )
}

const Header = styled(ComponentHeader)`
    justify-content: space-between;
`

const Content = styled.div`
    padding: 0 9px 12px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.textLight};
    display: grid;
    align-items: center;
    grid-template-columns: 9ch auto;
    grid-column-gap: 12px;
    grid-row-gap: 9px;
`
