import styled from 'styled-components/macro'
import { VSpacer } from '../ui/Spacer'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { SequencerHeader } from './SequencerHeader'
import { defaultDrumKit } from '../drums/kit'
import { TrackHeading } from './TrackHeading'
import { SequencerTimeline } from './SequencerTimeline'
import { useStepSequencer } from './useStepSequencer'
import { SequencerTracks } from './SequencerTracks'

export const Sequencer = () => {
    const {
        bars,
        setBars,
        doubleBars,
        steps,
        stepIndex,
        tracks,
        toggleStep,
        isPlaying,
        play,
        stop,
    } = useStepSequencer({
        drumKit: defaultDrumKit,
    })

    return (
        <Desk>
            <Enclosure>
                <SequencerHeader
                    bars={bars}
                    setBars={setBars}
                    doubleBars={doubleBars}
                    isPlaying={isPlaying}
                    play={play}
                    stop={stop}
                />
                <VSpacer size="small" />
                <Container>
                    <TrackHeadings>
                        {defaultDrumKit.samples.map((sample) => (
                            <TrackHeading
                                key={sample.name}
                                name={sample.name}
                                color={sample.color}
                            />
                        ))}
                    </TrackHeadings>
                    <div>
                        <SequencerTimeline steps={steps} current={stepIndex} />
                        <SequencerTracks
                            drumKit={defaultDrumKit}
                            tracks={tracks}
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
    grid-template-columns: 200px auto;
    grid-column-gap: 16px;
    margin: 0 12px 12px;
`

const TrackHeadings = styled.div`
    margin-top: 10px;
    display: grid;
    grid-row-gap: 5px;
`
