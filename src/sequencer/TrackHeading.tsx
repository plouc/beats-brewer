import { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import { FiEdit2, FiVolume, FiVolumeX } from 'react-icons/fi'
import { TrackWithPlayer } from './useStepSequencer'
import { MixerChannelSelector } from '../mixer/MixerChannelSelector'
import { useAppStore } from '../store/useApp'
import { SequencerTrackModal } from './SequencerTrackModal'
import { HSpacer } from '../ui/Spacer'
import { scaleLinear } from 'd3-scale'
import { lighten } from 'polished'

const meterScale = scaleLinear().domain([-60, 5]).range([0, 1])

interface TrackHeadingProps {
    track: TrackWithPlayer
    toggleTrack: (sampleId: string) => void
    updateTrackSample: (sampleId: string, trackId: string) => void
    meterValue: number | null
}

export const TrackHeading = ({
    track,
    toggleTrack,
    updateTrackSample,
    meterValue,
}: TrackHeadingProps) => {
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
            <TrackButton onClick={openModal}>
                <TrackName>{track.name}</TrackName>
                <HSpacer size="xsmall" />
                <FiEdit2 />
            </TrackButton>
            <MixerChannelSelector value={track.channel} />
            <MuteIcon isMuted={track.isMuted} onClick={handleToggle}>
                {track.isMuted && <FiVolumeX />}
                {!track.isMuted && <FiVolume />}
            </MuteIcon>
            <MeterBar
                color={track.color}
                value={meterValue === null ? 0 : meterScale(meterValue)}
            />
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
    grid-template-columns: auto 36px 24px 5px;
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

const TrackButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;
    overflow: hidden;
    cursor: pointer;

    svg {
        font-size: 14px;
    }
`

const TrackName = styled.span`
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
    cursor: pointer;

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`

const MeterBar = styled.div<{
    color: string
    value: number
}>`
    height: 24px;
    width: 100%;
    border-radius: 1px;
    background-color: ${(props) => lighten(0.15, props.color)};
    opacity: ${(props) => props.value};
`
