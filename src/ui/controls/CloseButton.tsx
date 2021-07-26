import { FiX } from 'react-icons/fi'
import { SquareIconButton } from './SquareIconButton'
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

const Button = styled(SquareIconButton)`
    width: 18px;
    height: 18px;
    font-size: 12px;
    border-radius: 1px;
    color: ${(props) => props.theme.colors.textLight};

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`
