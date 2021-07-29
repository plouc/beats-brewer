import styled from 'styled-components/macro'
import { PatternData } from '../project/definitions'

interface PlaylistPatternsProps {
    patterns: PatternData[]
}

export const PlaylistPatterns = ({ patterns }: PlaylistPatternsProps) => {
    return (
        <Container>
            {patterns.map((pattern) => {
                return <Pattern key={pattern.id}>{pattern.name}</Pattern>
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

const Pattern = styled.div`
    background-color: ${(props) => props.theme.enclosure.background};
    border-radius: 2px;
    padding: 5px 9px;
    font-family: ${(props) => props.theme.typography.headingFont};
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-top: 3px;

    &:first-child {
        margin-top: 0;
    }
`
