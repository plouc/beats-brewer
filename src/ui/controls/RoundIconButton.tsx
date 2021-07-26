import styled from 'styled-components/macro'
import { HardwareButton } from './HardwareButton'

export const RoundIconButton = styled(HardwareButton)<{
    isPressed?: boolean
    isInactive?: boolean
    hasNext?: boolean
    hasPrevious?: boolean
}>`
    padding: 0;
    font-size: 12px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
`
