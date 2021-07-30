import * as Tone from 'tone'
import styled from 'styled-components/macro'
import { useAppStore } from '../useApp'
import { useMemo } from 'react'

const MIN_LENGTH = `${16 * 6}n`

export const PlaylistGrid = () => {
    const rawTracks = useAppStore((state) => state.tracks)
    const globalPatterns = useAppStore((state) => state.project!.patterns)
    const tracks = useMemo(() => {
        return rawTracks.map((track) => {
            const patterns = track.patterns.map((trackPattern: any) => {
                const pattern = globalPatterns.find((p) => p.id === trackPattern.patternId)
                if (pattern === undefined) {
                    throw new Error(`pattern ${trackPattern.patternId} not found`)
                }

                return {
                    ...trackPattern,
                    pattern,
                }
            })

            return {
                ...track,
                patterns,
            }
        })
    }, [rawTracks, globalPatterns])

    console.log({ tracks })

    const time = Tone.Time(MIN_LENGTH)
    console.log({
        bpm: Tone.Transport.bpm.value,
        MIN_LENGTH,
        time,
        seconds: time.toSeconds(),
        ticks: time.toTicks(),
        notation: time.toNotation(),
    })

    return (
        <Container tracks={tracks.length}>
            {tracks.map((track, trackIndex) => {
                return <div key={trackIndex}>Track {trackIndex + 1}</div>
            })}
        </Container>
    )
}

const Container = styled.div<{
    tracks: number
}>`
    display: grid;
    grid-template-rows: repeat(${(props) => props.tracks}, 48px);
    background-color: ${(props) => props.theme.enclosure.backgroundDark};
`
