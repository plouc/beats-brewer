import { useCallback } from 'react'
import styled from 'styled-components/macro'
import { darken } from 'polished'
import { FiVolume, FiVolumeX } from 'react-icons/fi'
import { TrackWithPlayer } from './useStepSequencer'

interface TrackHeadingProps {
    track: TrackWithPlayer
    toggleTrack: (sampleId: string) => void
}

export const TrackHeading = ({ track, toggleTrack }: TrackHeadingProps) => {
    const handleToggle = useCallback(() => {
        toggleTrack(track.id)
    }, [track.id, toggleTrack])

    return (
        <TrackHeadingContainer color={track.color}>
            <TrackName>{track.name}</TrackName>
            <MuteIcon isMuted={track.isMuted} onClick={handleToggle}>
                {track.isMuted && <FiVolumeX />}
                {!track.isMuted && <FiVolume />}
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

const MuteIcon = styled.div<{
    isMuted: boolean
}>`
    font-size: 16px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`
