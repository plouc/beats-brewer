import { FiPlay, FiSquare } from 'react-icons/fi'
import { SquareButton } from './SquareButton'
import { ControlGroup } from './ControlGroup'

interface PlayerControlsProps {
    isPlaying: boolean
    play: () => void
    stop: () => void
}

export const PlayerControls = ({ isPlaying, play, stop }: PlayerControlsProps) => {
    return (
        <ControlGroup>
            <SquareButton isPressed={isPlaying} onClick={play}>
                <FiPlay />
            </SquareButton>
            <SquareButton isPressed={!isPlaying} onClick={stop}>
                <FiSquare />
            </SquareButton>
        </ControlGroup>
    )
}
