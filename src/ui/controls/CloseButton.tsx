import { FiX } from 'react-icons/fi'
import { SquareButton } from './SquareButton'
import styled from 'styled-components/macro'
import { ControlGroup } from './ControlGroup'

interface CloseButtonProps {
    onClose: () => void
}

export const CloseButton = ({ onClose }: CloseButtonProps) => {
    return (
        <ControlGroup>
            <Button onClick={onClose}>
                <FiX />
            </Button>
        </ControlGroup>
    )
}

const Button = styled(SquareButton)`
    width: 18px;
    height: 18px;
    font-size: 12px;
`
