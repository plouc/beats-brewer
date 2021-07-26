import { FiX } from 'react-icons/fi'
import { RoundIconButton } from './RoundIconButton'
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

const Button = styled(RoundIconButton)`
    color: ${(props) => props.theme.colors.textLight};

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`
