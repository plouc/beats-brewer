import { FiPlay, FiSquare } from 'react-icons/fi'
import { SquareButton } from './SquareButton'

interface PlayerControlsProps {
    isPlaying: boolean
    play: () => void
    stop: () => void
}

export const PlayerControls = ({ isPlaying, play, stop }: PlayerControlsProps) => {
    return (
        <div>
            <SquareButton hasNext isPressed={isPlaying} onClick={play}>
                <FiPlay />
            </SquareButton>
            <SquareButton hasPrevious isPressed={!isPlaying} onClick={stop}>
                <FiSquare />
            </SquareButton>
        </div>
    )
}
