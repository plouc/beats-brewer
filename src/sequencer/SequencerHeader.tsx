import { FiCopy } from 'react-icons/fi'
import { HSpacer } from '../ui/Spacer'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { SequencerBars } from './SequencerBars'
import { PlayerControls } from '../ui/controls/PlayerControls'
import { Button } from '../ui/controls/Button'
import { SequencerPattern } from '../project/definitions'

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
        <ComponentHeader>
            <ComponentName>
                <ComponentNameHighlight>{pattern.name}</ComponentNameHighlight>
            </ComponentName>
            <HSpacer />
            <PlayerControls isPlaying={isPlaying} play={play} stop={stop} />
            <HSpacer />
            <SequencerBars bars={bars} setBars={setBars} />
            <HSpacer size="small" />
            <Button onClick={doubleBars}>
                <FiCopy />
                <HSpacer size="xsmall" />
                double
            </Button>
        </ComponentHeader>
    )
}
