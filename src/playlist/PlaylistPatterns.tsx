import styled from 'styled-components/macro'
import { PatternData } from '../project/definitions'
import { PlaylistPattern } from './PlaylistPattern'

interface PlaylistPatternsProps {
    patterns: PatternData[]
    selectedId: string | null
    onSelect: (patternId: string) => void
}

export const PlaylistPatterns = ({ patterns, selectedId, onSelect }: PlaylistPatternsProps) => {
    return (
        <Container>
            {patterns.map((pattern) => {
                return (
                    <PlaylistPattern
                        key={pattern.id}
                        pattern={pattern}
                        isSelected={pattern.id === selectedId}
                        onSelect={onSelect}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.enclosure.backgroundDark};
    padding: 3px;
    border-radius: 3px;
`
