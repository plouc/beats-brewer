import { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import { FiVolume, FiVolumeX } from 'react-icons/fi'
import { TrackWithPlayer } from './useStepSequencer'
import { MixerChannelSelector } from '../mixer/MixerChannelSelector'
import { useAppStore } from '../store/useApp'
import { SequencerTrackModal } from './SequencerTrackModal'

interface TrackHeadingProps {
    track: TrackWithPlayer
    toggleTrack: (sampleId: string) => void
    updateTrackSample: (sampleId: string, trackId: string) => void
}

export const TrackHeading = ({ track, toggleTrack, updateTrackSample }: TrackHeadingProps) => {
    const highlightChannel = useAppStore((state) => state.highlightChannel)
    const handleMouseEnter = useCallback(
        () => highlightChannel(track.channel),
        [highlightChannel, track.channel]
    )
    const handleMouseLeave = useCallback(() => highlightChannel(-1), [highlightChannel])
    const handleToggle = useCallback(() => toggleTrack(track.id), [track.id, toggleTrack])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen])
    const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen])

    const handleUpdateSample = useCallback(
        (sampleId: string) => {
            updateTrackSample(track.id, sampleId)
        },
        [updateTrackSample, track.id]
    )

    return (
        <TrackHeadingContainer
            color={track.color}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <TrackName onClick={openModal}>{track.name}</TrackName>
            <MixerChannelSelector value={track.channel} />
            <MuteIcon isMuted={track.isMuted} onClick={handleToggle}>
                {track.isMuted && <FiVolumeX />}
                {!track.isMuted && <FiVolume />}
            </MuteIcon>
            {isModalOpen && (
                <SequencerTrackModal
                    track={track}
                    onUpdateSample={handleUpdateSample}
                    onClose={closeModal}
                />
            )}
        </TrackHeadingContainer>
    )
}

const TrackHeadingContainer = styled.div<{
    color: string
}>`
    display: grid;
    grid-template-columns: auto 36px 24px;
    grid-column-gap: 5px;
    position: relative;
    align-items: center;
    font-family: ${(props) => props.theme.typography.monospacedFont};
    font-size: 12px;
    background-color: ${(props) => props.theme.enclosure.backgroundAlt};
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
        &:before {
            opacity: 1;
        }
    }
`

const TrackName = styled.div`
    font-family: ${(props) => props.theme.typography.headingFont};
    text-transform: uppercase;
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    color: ${(props) => props.theme.colors.textLight};

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`
