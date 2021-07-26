import { FiX } from 'react-icons/fi'
import { SquareIconButton } from './SquareIconButton'

interface CloseButtonProps {
    onClose: () => void
}

export const CloseButton = ({ onClose }: CloseButtonProps) => {
    return (
        <SquareIconButton onClick={onClose}>
            <FiX />
        </SquareIconButton>
    )
}
