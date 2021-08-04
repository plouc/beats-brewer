import { FiCopy } from 'react-icons/fi'
import { HSpacer } from '../ui/Spacer'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { SequencerBars } from './SequencerBars'
import { PlayerControls } from '../ui/controls/PlayerControls'
import { Button } from '../ui/controls/Button'
import { SequencerPattern } from '../project/definitions'
import { ControlGroup } from '../ui/controls/ControlGroup'
import styled from 'styled-components/macro'

interface SequencerHeaderProps {
    pattern: SequencerPattern
    bars: number
    setBars: (bars: number) => void
    doubleBars: () => void
    isPlaying: boolean
    play: () => void
    stop: () => void
}

export const SequencerHeader = ({
    pattern,
    bars,
    setBars,
    doubleBars,
    isPlaying,
    play,
    stop,
}: SequencerHeaderProps) => {
    return (
        <Header>
            <Name>
                <ComponentNameHighlight>{pattern.name}</ComponentNameHighlight>
            </Name>
            <Controls>
                <PlayerControls isPlaying={isPlaying} play={play} stop={stop} />
                <HSpacer size="xsmall" />
                <SequencerBars bars={bars} setBars={setBars} />
                <HSpacer size="xsmall" />
                <ControlGroup>
                    <Button onClick={doubleBars}>
                        <FiCopy />
                        <HSpacer size="xsmall" />
                        double
                    </Button>
                </ControlGroup>
            </Controls>
        </Header>
    )
}

const Header = styled(ComponentHeader)`
    display: grid;
    grid-template-columns: 240px auto;
    grid-column-gap: 16px;
`

const Name = styled(ComponentName)`
    white-space: nowrap;

    & > * {
        text-overflow: ellipsis;
        overflow: hidden;
    }
`

const Controls = styled.div`
    display: flex;
`
