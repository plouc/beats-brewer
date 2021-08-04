import styled from 'styled-components/macro'
import { RackButton } from './RackButton'

export const RackSquareButton = styled(RackButton)<{
    isPressed?: boolean
    isInactive?: boolean
}>`
    padding: 0;
    font-size: 14px;
    width: 28px;
`
