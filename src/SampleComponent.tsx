import { FiMusic } from 'react-icons/fi'
import { Desk } from './ui/Desk'
import { Enclosure } from './ui/Enclosure'
import { ComponentHeader } from './ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from './ui/ComponentName'
import { HardwareButton } from './ui/controls/HardwareButton'
import { HSpacer, VSpacer } from './ui/Spacer'
import { SliderControl } from './ui/controls/SliderControl'
import { RoundIconButton } from './ui/controls/RoundIconButton'
import { SquareIconButton } from './ui/controls/SquareIconButton'
import styled from 'styled-components/macro'

export const SampleComponent = () => {
    return (
        <Desk>
            <Enclosure>
                <ComponentHeader>
                    <ComponentName>
                        The&nbsp;
                        <ComponentNameHighlight>Thing</ComponentNameHighlight>
                    </ComponentName>
                </ComponentHeader>
                <VSpacer />
                <div>
                    <Row>
                        <HardwareButton>Button</HardwareButton>
                        <HSpacer size="small" />
                        <HardwareButton isPressed>Button</HardwareButton>
                        <HSpacer size="small" />
                        <HardwareButton>
                            <FiMusic />
                            &nbsp;Button
                        </HardwareButton>
                        <HSpacer size="small" />
                        <HardwareButton isPressed>
                            <FiMusic />
                            &nbsp;Button
                        </HardwareButton>
                        <HSpacer size="small" />
                        <RoundIconButton>
                            <FiMusic />
                        </RoundIconButton>
                        <HSpacer size="small" />
                        <SquareIconButton>
                            <FiMusic />
                        </SquareIconButton>
                    </Row>
                    <VSpacer />
                    <SliderControl />
                </div>
            </Enclosure>
        </Desk>
    )
}

const Row = styled.div`
    display: flex;
    align-items: center;
`
