import { useCallback } from 'react'
import styled from 'styled-components/macro'
import { PatternData } from '../project/definitions'

interface PlaylistPatternProps {
    pattern: PatternData
    isSelected: boolean
    onSelect: (patternId: string) => void
}

export const PlaylistPattern = ({ pattern, isSelected, onSelect }: PlaylistPatternProps) => {
    const handleSelect = useCallback(() => {
        onSelect(pattern.id)
    }, [pattern.id, onSelect])

    return (
        <Container key={pattern.id} isSelected={isSelected} onClick={handleSelect}>
            {pattern.name}
        </Container>
    )
}

const Container = styled.div<{
    isSelected: boolean
}>`
    background-color: ${(props) => props.theme.enclosure.background};
    border-radius: 2px;
    padding: 7px 9px;
    font-family: ${(props) => props.theme.typography.headingFont};
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-top: 3px;
    opacity: ${(props) => (props.isSelected ? 1 : 0.66)};

    &:first-child {
        margin-top: 0;
    }

    &:hover {
        opacity: 1;
    }
`
