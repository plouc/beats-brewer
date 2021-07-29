import styled from 'styled-components/macro'

interface PlaylistTracksProps {}

export const PlaylistTracks = ({}: PlaylistTracksProps) => {
    return (
        <Container>
            <Track>
                <TrackLabel>Track 1</TrackLabel>
            </Track>
            <Track>
                <TrackLabel>Track 2</TrackLabel>
            </Track>
            <Track>
                <TrackLabel>Track 3</TrackLabel>
            </Track>
            <Track>
                <TrackLabel>Track 4</TrackLabel>
            </Track>
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
