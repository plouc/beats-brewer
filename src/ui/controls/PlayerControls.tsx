import { FiPlay, FiSquare } from 'react-icons/fi'
import { SquareIconButton } from './SquareIconButton'

interface PlayerControlsProps {
    isPlaying: boolean
    play: () => void
    stop: () => void
}

export const PlayerControls = ({ isPlaying, play, stop }: PlayerControlsProps) => {
    return (
        <div>
            <SquareIconButton hasNext isPressed={isPlaying} onClick={play}>
                <FiPlay />
            </SquareIconButton>
            <SquareIconButton hasPrevious isPressed={!isPlaying} onClick={stop}>
                <FiSquare />
            </SquareIconButton>
        </div>
    )
}
