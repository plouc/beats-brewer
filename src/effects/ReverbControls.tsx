import styled from 'styled-components/macro'
import { ChangeEvent, useCallback, useState } from 'react'
import { FiClock, FiChevronsRight } from 'react-icons/fi'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { EffectHeader } from './EffectHeader'
import { NumberInput } from '../ui/controls/NumberInput'
import { Reverb } from './definitions'
import { EffectWetControl } from './EffectWetControl'
import { HSpacer, VSpacer } from '../ui/Spacer'
import { Knob } from '../ui/controls/Knob'
import { EffectControlLabel } from './EffectControlLabel'

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
                <Container>
                    <Knobs>
                        <Column>
                            <NumberInput
                                type="number"
                                onChange={handleDecayChange}
                                value={decay}
                                min={0.001}
                                step={0.001}
                            />
                            <VSpacer size="small" />
                            <KnobContainer>
                                <Knob size={70} value={decay} />
                            </KnobContainer>
                            <VSpacer size="small" />
                            <EffectControlLabel>
                                <FiChevronsRight />
                                <HSpacer size="xsmall" />
                                decay
                            </EffectControlLabel>
                        </Column>
                        <Column>
                            <NumberInput
                                type="number"
                                onChange={handlePreDelayChange}
                                value={preDelay}
                                min={0}
                                step={0.05}
                            />
                            <VSpacer size="small" />
                            <KnobContainer>
                                <Knob size={50} value={preDelay} />
                            </KnobContainer>
                            <VSpacer size="small" />
                            <EffectControlLabel>
                                <FiClock />
                                <HSpacer size="xsmall" />
                                pre delay
                            </EffectControlLabel>
                        </Column>
                    </Knobs>
                    <VSpacer />
                    <EffectWetControl effect={reverb.instance} />
                </Container>
            </Enclosure>
        </Desk>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Knobs = styled.div`
    display: grid;
    grid-template-columns: 100px 100px;
    grid-column-gap: 12px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        max-width: 80px;
    }
`

const KnobContainer = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
`
