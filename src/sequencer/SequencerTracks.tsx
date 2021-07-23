import styled from 'styled-components/macro'
import { DrumKit } from '../drums/kit'
import { TrackSteps } from './TrackSteps'
import { TrackData } from './useStepSequencer'

interface SequencerTracksProps {
    drumKit: DrumKit
    tracks: TrackData[]
    toggleStep: (sampleId: string, index: number) => void
}

export const SequencerTracks = ({ drumKit, tracks, toggleStep }: SequencerTracksProps) => {
    return (
        <Container>
            {drumKit.samples.map((sample) => {
                const track = tracks.find((t) => t.sampleId === sample.id)

                if (!track) return null

                return (
                    <TrackSteps
                        key={sample.name}
                        sampleId={sample.id}
                        color={sample.color}
                        steps={track.steps}
                        toggleStep={toggleStep}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-row-gap: 5px;
`
