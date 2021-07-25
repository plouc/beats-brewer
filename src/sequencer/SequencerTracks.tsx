import styled from 'styled-components/macro'
import { TrackSteps } from './TrackSteps'
import { TrackWithPlayer } from './useStepSequencer'

interface SequencerTracksProps {
    tracks: TrackWithPlayer[]
    currentStep: number
    toggleStep: (sampleId: string, index: number) => void
}

export const SequencerTracks = ({ tracks, currentStep, toggleStep }: SequencerTracksProps) => {
    return (
        <Container>
            {tracks.map((track) => (
                <TrackSteps
                    key={track.id}
                    track={track}
                    currentStep={currentStep}
                    toggleStep={toggleStep}
                />
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-row-gap: 5px;
`
