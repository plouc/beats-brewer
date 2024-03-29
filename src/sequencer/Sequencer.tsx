import styled from 'styled-components/macro'
import { VSpacer } from '../ui/Spacer'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { SequencerHeader } from './SequencerHeader'
import { TrackHeading } from './TrackHeading'
import { SequencerTimeline } from './SequencerTimeline'
import { useStepSequencer } from './useStepSequencer'
import { SequencerTracks } from './SequencerTracks'
import { SequencerPattern } from '../project/definitions'

interface SequencerProps {
    pattern: SequencerPattern
}

export const Sequencer = ({ pattern }: SequencerProps) => {
    const {
        bars,
        setBars,
        doubleBars,
        steps,
        stepIndex,
        tracks,
        toggleTrack,
        updateTrackSample,
        toggleStep,
        isPlaying,
        play,
        stop,
        trackMeterValues,
    } = useStepSequencer({
        pattern,
    })

    return (
        <Desk>
            <Enclosure>
                <SequencerHeader
                    pattern={pattern}
                    bars={bars}
                    setBars={setBars}
                    doubleBars={doubleBars}
                    isPlaying={isPlaying}
                    play={play}
                    stop={stop}
                />
                <VSpacer />
                <Container>
                    <TrackHeadings>
                        {tracks.map((track, trackIndex) => (
                            <TrackHeading
                                key={track.id}
                                track={track}
                                updateTrackSample={updateTrackSample}
                                toggleTrack={toggleTrack}
                                meterValue={
                                    trackMeterValues[trackIndex] !== undefined
                                        ? trackMeterValues[trackIndex]
                                        : null
                                }
                            />
                        ))}
                    </TrackHeadings>
                    <div>
                        <SequencerTimeline steps={steps} current={stepIndex} />
                        <SequencerTracks
                            tracks={tracks}
                            currentStep={stepIndex}
                            toggleStep={toggleStep}
                        />
                    </div>
                </Container>
            </Enclosure>
        </Desk>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 240px auto;
    grid-column-gap: 16px;
`

const TrackHeadings = styled.div`
    margin-top: 10px;
    display: grid;
    grid-row-gap: 5px;
`
