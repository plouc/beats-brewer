import styled from 'styled-components/macro'
import { RackButton } from './RackButton'

export const RackRoundButton = styled(RackButton)<{
    isPressed?: boolean
    isInactive?: boolean
}>`
    padding: 0;
    font-size: 12px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
`
