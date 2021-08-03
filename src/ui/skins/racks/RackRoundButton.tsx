import styled from 'styled-components/macro'
import { RackButton } from './RackButton'

export const RackRoundButton = styled(RackButton)<{
    isPressed?: boolean
    isInactive?: boolean
}>`
    padding: 0;
    font-size: 12px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`
