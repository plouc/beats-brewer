import styled from 'styled-components/macro'
import * as Tone from 'tone'
import { FiMusic } from 'react-icons/fi'
import { Desk } from './ui/Desk'
import { Enclosure } from './ui/Enclosure'
import { ComponentHeader } from './ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from './ui/ComponentName'
import { Button } from './ui/controls/Button'
import { HSpacer, VSpacer } from './ui/Spacer'
import { Slider } from './ui/controls/Slider'
import { RoundButton } from './ui/controls/RoundButton'
import { SquareButton } from './ui/controls/SquareButton'
import { Knob } from './ui/controls/Knob'
import { ReverbControls } from './effects/ReverbControls'
import { DistortionControls } from './effects/DistortionControls'

export const DemoComponents = () => {
    return (
        <>
            <Row>
                <SampleComponent />
            </Row>
            <Row>
                <ReverbControls
                    reverb={{
                        id: 'A',
                        type: 'reverb',
                        acronym: 'REV',
                        wet: 0.6,
                        decay: 1,
                        preDelay: 0,
                        instance: new Tone.Reverb(),
                    }}
                />
                <DistortionControls
                    distortion={{
                        id: 'A',
                        type: 'distortion',
                        acronym: 'DIS',
                        wet: 0.6,
                        distortion: 1,
                        instance: new Tone.Distortion(),
                    }}
                />
            </Row>
        </>
    )
}

const Row = styled.div`
    display: flex;
`

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
                    <SampleComponentRow>
                        <Button>Button</Button>
                        <HSpacer size="small" />
                        <Button hasNext isPressed={true}>
                            ON
                        </Button>
                        <Button hasPrevious>OFF</Button>
                        <HSpacer size="small" />
                        <Button isPressed>Button</Button>
                        <HSpacer size="small" />
                        <Button>
                            <FiMusic />
                            &nbsp;Button
                        </Button>
                        <HSpacer size="small" />
                        <Button isPressed>
                            <FiMusic />
                            &nbsp;Button
                        </Button>
                        <HSpacer size="small" />
                        <RoundButton>
                            <FiMusic />
                        </RoundButton>
                        <HSpacer size="small" />
                        <SquareButton>
                            <FiMusic />
                        </SquareButton>
                    </SampleComponentRow>
                    <VSpacer />
                    <Slider value={0.35} onChange={(value) => console.log(value)} />
                    <VSpacer />
                    <SampleComponentRow>
                        <Knob size={60} value={0} />
                        <Knob size={60} value={0.25} />
                        <Knob size={60} value={0.5} />
                        <Knob size={60} value={0.75} />
                        <Knob size={60} value={1} />
                    </SampleComponentRow>
                </div>
            </Enclosure>
        </Desk>
    )
}

const SampleComponentRow = styled.div`
    display: flex;
    align-items: center;
`
