import styled from 'styled-components/macro'
import { RawButton } from './RawButton'

export const RawRoundButton = styled(RawButton)<{
    isPressed?: boolean
    isInactive?: boolean
}>`
    position: relative;
    padding: 0;
    font-size: 12px;
    width: 24px;
    height: 24px;

    &:after {
        position: absolute;
        content: '';
        width: 16px;
        height: 16px;
        top: calc(50% - 8px);
        left: calc(50% - 8px);
        border-radius: 50%;
        border: 1px solid ${(props) => props.theme.colors.text};
    }
`
