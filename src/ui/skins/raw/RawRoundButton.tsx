import styled from 'styled-components/macro'

export const RawRoundButton = styled.div<{
    isPressed?: boolean
    isInactive?: boolean
}>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 28px;
    height: 28px;
    margin-left: 1px;

    &:before {
        position: absolute;
        content: '';
        z-index: -2;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        background-color: ${(props) => props.theme.enclosure.backgroundDark};
    }

    &:after {
        position: absolute;
        content: '';
        z-index: -1;
        width: 22px;
        height: 22px;
        top: calc(50% - 11px);
        left: calc(50% - 11px);
        border-radius: 50%;
        background-color: ${(props) => props.theme.enclosure.backgroundLight};
    }
`
