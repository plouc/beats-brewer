import styled from 'styled-components/macro'
import { HardwareButton } from './HardwareButton'

export const SquareIconButton = styled(HardwareButton)<{
    isPressed?: boolean
    isInactive?: boolean
    hasNext?: boolean
    hasPrevious?: boolean
}>`
    padding: 0;
    font-size: 14px;
    width: 24px;
    height: 24px;
`
