import styled from 'styled-components/macro'
import { RawButton } from './RawButton'

export const RawSquareButton = styled(RawButton)<{
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
