import { FiCopy } from 'react-icons/fi'
import { HSpacer } from '../ui/Spacer'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { SequencerBars } from './SequencerBars'
import { PlayerControls } from '../ui/controls/PlayerControls'
import { HardwareButton } from '../ui/controls/HardwareButton'

interface SequencerHeaderProps {
    bars: number
    setBars: (bars: number) => void
    doubleBars: () => void
    isPlaying: boolean
    play: () => void
    stop: () => void
}

export const SequencerHeader = ({
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
                <ComponentNameHighlight>Step Sequencer</ComponentNameHighlight>
            </ComponentName>
            <HSpacer />
            <PlayerControls isPlaying={isPlaying} play={play} stop={stop} />
            <HSpacer />
            <SequencerBars bars={bars} setBars={setBars} />
            <HSpacer size="small" />
            <HardwareButton onClick={doubleBars}>
                <FiCopy />
                <HSpacer size="xsmall" />
                double
            </HardwareButton>
        </ComponentHeader>
    )
}
