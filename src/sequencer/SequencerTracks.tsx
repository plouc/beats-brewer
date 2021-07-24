import styled from 'styled-components/macro'
import { TrackSteps } from './TrackSteps'
import { TrackWithPlayer } from './useStepSequencer'

interface SequencerTracksProps {
    tracks: TrackWithPlayer[]
    toggleStep: (sampleId: string, index: number) => void
}

export const SequencerTracks = ({ tracks, toggleStep }: SequencerTracksProps) => {
    return (
        <Container>
            {tracks.map((track) => (
                <TrackSteps key={track.id} track={track} toggleStep={toggleStep} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-row-gap: 5px;
`
