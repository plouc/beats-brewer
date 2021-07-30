import { useMemo, Fragment } from 'react'
import styled from 'styled-components/macro'
import * as Tone from 'tone'
import { useAppStore } from '../useApp'

const MIN_LENGTH = `${16 * 6}t`

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

    const tickCount = time.toTicks()
    const ticks = Array.from({ length: tickCount }).map((_, index) => index)

    return (
        <Container tracks={tracks.length} ticks={ticks.length}>
            {tracks.map((track, trackIndex) => {
                return (
                    <Fragment key={trackIndex}>
                        {ticks.map((tick) => {
                            return <Tick key={tick}></Tick>
                        })}
                    </Fragment>
                )
            })}
        </Container>
    )
}

const Container = styled.div<{
    tracks: number
    ticks: number
}>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.ticks}, 10px);
    grid-template-rows: repeat(${(props) => props.tracks}, 48px);
    background-color: ${(props) => props.theme.enclosure.backgroundDark};
`

const Tick = styled.div`
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
`
