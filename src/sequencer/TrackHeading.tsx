import { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import { darken, lighten } from 'polished'
import { FiEdit2, FiVolume, FiVolumeX } from 'react-icons/fi'
import { TrackWithPlayer } from './useStepSequencer'
import { MixerChannelSelector } from '../mixer/MixerChannelSelector'
import { useAppStore } from '../store/useApp'
import { SequencerTrackModal } from './SequencerTrackModal'
// import { scaleLinear } from 'd3-scale'
import { ControlGroup } from '../ui/controls/ControlGroup'
import { SquareButton } from '../ui/controls/SquareButton'
import { ControlLabel } from '../ui/controls/ControlLabel'
import { RoundButton } from '../ui/controls/RoundButton'

// const meterScale = scaleLinear().domain([-60, 5]).range([0, 1])

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
        <TrackHeadingContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Color color={track.color} />
            <TrackName>{track.name}</TrackName>
            <RoundButton onClick={openModal}>
                <FiEdit2 />
            </RoundButton>
            <MixerChannelSelector value={track.channel} />
            <SquareButton onClick={handleToggle} isPressed={track.isMuted}>
                {track.isMuted && <FiVolumeX />}
                {!track.isMuted && <FiVolume />}
            </SquareButton>
            {/*<MeterBar
                    color={track.color}
                    value={meterValue === null ? 0 : meterScale(meterValue)}
                />*/}
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

const TrackHeadingContainer = styled(ControlGroup)`
    display: grid;
    padding-left: 1px;
    grid-template-columns: 6px auto 28px 28px 14px 28px;
    grid-column-gap: 1px;
    align-items: center;
    position: relative;
    font-family: ${(props) => props.theme.typography.monospacedFont};
    font-size: 12px;
    user-select: none;
    overflow: hidden;
    height: 30px;

    & > * {
        margin-left: 0;
    }
`

const Color = styled(ControlLabel)<{
    color: string
}>`
    width: 6px;
    padding: 0;
    background-color: ${(props) => props.color};
    border-radius: 2px 0 0 2px;
    box-shadow: inset 0 1px 0 ${(props) => lighten(0.12, props.color)},
        inset 0 -1px 0 ${(props) => darken(0.12, props.color)};
`

const TrackName = styled(ControlLabel)`
    display: block;
    line-height: 28px;
    font-family: ${(props) => props.theme.typography.headingFont};
    text-transform: uppercase;
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${(props) => props.theme.colors.text};
    border-radius: 0 2px 2px 0;
`

/*
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
*/
