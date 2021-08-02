import { FiX } from 'react-icons/fi'
import { SquareButton } from './SquareButton'
import styled from 'styled-components/macro'

interface CloseButtonProps {
    onClose: () => void
}

export const CloseButton = ({ onClose }: CloseButtonProps) => {
    return (
        <Button onClick={onClose}>
            <FiX />
        </Button>
    )
}

const Button = styled(SquareButton)`
    width: 18px;
    height: 18px;
    font-size: 12px;
`
