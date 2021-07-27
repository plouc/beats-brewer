import styled from 'styled-components/macro'
import { ChangeEvent, useCallback, useState } from 'react'
import { FiClock, FiChevronsRight } from 'react-icons/fi'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { EffectHeader } from './EffectHeader'
import { NumberInput } from '../ui/controls/NumberInput'
import { Reverb } from './definitions'
import { EffectWetControl } from './EffectWetControl'
import { HSpacer } from '../ui/Spacer'

interface ReverbControlsProps {
    reverb: Reverb
}

export const ReverbControls = ({ reverb }: ReverbControlsProps) => {
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
                <EffectHeader effect={reverb} />
                <Content>
                    <Label>
                        <FiChevronsRight />
                        <HSpacer size="xsmall" />
                        decay
                    </Label>
                    <NumberInput
                        type="number"
                        onChange={handleDecayChange}
                        value={decay}
                        min={0.001}
                        step={0.001}
                    />
                    <Label>
                        <FiClock />
                        <HSpacer size="xsmall" />
                        pre delay
                    </Label>
                    <NumberInput
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

const Content = styled.div`
    font-size: 12px;
    color: ${(props) => props.theme.colors.textLight};
    display: grid;
    align-items: center;
    grid-template-columns: auto 90px;
    grid-column-gap: 12px;
    grid-row-gap: 9px;
`

const Label = styled.span`
    display: flex;
    align-items: center;
`
