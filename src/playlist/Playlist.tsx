import styled from 'styled-components/macro'
import { VSpacer } from '../ui/Spacer'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { useAppStore } from '../useApp'
import { PlaylistPatterns } from './PlaylistPatterns'
import { PlaylistTracks } from './PlaylistTracks'

interface PlaylistProps {}

export const Playlist = ({}: PlaylistProps) => {
    const project = useAppStore((state) => state.project)

    if (!project) return null

    return (
        <Desk>
            <Enclosure>
                <ComponentHeader>
                    <ComponentName>
                        <ComponentNameHighlight>Playlist</ComponentNameHighlight>
                    </ComponentName>
                </ComponentHeader>
                <VSpacer />
                <Container>
                    <PlaylistPatterns patterns={project.patterns} />
                    <SecondaryContainer>
                        <PlaylistTracks />
                        <div></div>
                    </SecondaryContainer>
                </Container>
            </Enclosure>
        </Desk>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 160px auto;
    grid-column-gap: 6px;
`

const SecondaryContainer = styled.div`
    display: grid;
    grid-template-columns: 120px auto;
    grid-column-gap: 6px;
`
