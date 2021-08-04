import styled from 'styled-components/macro'
import { flatButtonBase, flatButtonNormal, flatButtonHover, flatButtonPressed } from './FlatButton'

export const FlatSquareButton = styled.div<{
    isPressed?: boolean
    isInactive?: boolean
}>`
    ${flatButtonBase}
    font-size: 12px;
    width: 28px;
    background-color: ${(props) => props.theme.enclosure.background};

    ${(props) => (props.isPressed ? flatButtonPressed : flatButtonNormal)}

    &:hover {
        ${flatButtonHover}
    }
`
