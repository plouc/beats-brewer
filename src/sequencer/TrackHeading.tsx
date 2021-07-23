import styled from 'styled-components/macro'
import { FiVolume, FiVolumeX } from 'react-icons/fi'
import { darken } from 'polished'
import { useCallback } from 'react'

interface TrackHeadingProps {
    sampleId: string
    name: string
    color: string
    isMuted: boolean
    toggleTrack: (sampleId: string) => void
}

export const TrackHeading = ({
    sampleId,
    name,
    color,
    isMuted,
    toggleTrack,
}: TrackHeadingProps) => {
    const handleToggle = useCallback(() => {
        toggleTrack(sampleId)
    }, [sampleId, toggleTrack])
    return (
        <TrackHeadingContainer color={color}>
            <TrackName>{name}</TrackName>
            <MuteIcon onClick={handleToggle}>
                {isMuted && <FiVolumeX />}
                {!isMuted && <FiVolume />}
            </MuteIcon>
        </TrackHeadingContainer>
    )
}

const TrackHeadingContainer = styled.div<{
    color: string
}>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${(props) => props.theme.typography.monospacedFont};
    font-size: 12px;
    background-color: ${(props) => darken(0.03, props.theme.colors.enclosureBackground)};
    height: 32px;
    border-radius: 2px;
    padding: 0 6px 0 16px;
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

const MuteIcon = styled.div`
    font-size: 16px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`
