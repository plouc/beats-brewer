import styled from 'styled-components/macro'
import { darken } from 'polished'

interface TrackHeadingProps {
    name: string
    color: string
}

export const TrackHeading = ({ name, color }: TrackHeadingProps) => {
    return (
        <TrackHeadingContainer color={color}>
            <TrackName>{name}</TrackName>
        </TrackHeadingContainer>
    )
}

const TrackHeadingContainer = styled.div<{
    color: string
}>`
    position: relative;
    display: flex;
    align-items: center;
    font-family: ${(props) => props.theme.typography.monospacedFont};
    font-size: 12px;
    background-color: ${(props) => darken(0.03, props.theme.colors.enclosureBackground)};
    height: 32px;
    border-radius: 2px;
    padding: 0 9px 0 16px;
    user-select: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.textLight};

    &:before {
        content: '';
        position: absolute;
        background-color: ${(props) => props.color};
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        border-radius: 2px 0 0 2px;
        opacity: 0.6;
    }

    &:hover {
        color: ${(props) => props.theme.colors.text};

        &:before {
            opacity: 1;
        }
    }
`

const TrackName = styled.div`
    font-family: ${(props) => props.theme.typography.headingFont};
    text-transform: uppercase;
    font-size: 10px;
`
