import styled from 'styled-components/macro'
import { useAppStore } from '../useApp'

export const PlaylistTracks = () => {
    const tracks = useAppStore((state) => state.tracks)

    return (
        <Container>
            {tracks.map((track, trackIndex) => {
                return (
                    <Track key={trackIndex}>
                        <TrackLabel>Track {trackIndex + 1}</TrackLabel>
                    </Track>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Track = styled.div`
    display: flex;
    height: 48px;
    padding: 3px 0;
`

const TrackLabel = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.enclosure.backgroundAlt};
    border-radius: 2px;
    padding: 5px 9px;
    font-family: ${(props) => props.theme.typography.headingFont};
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    text-transform: uppercase;
`
