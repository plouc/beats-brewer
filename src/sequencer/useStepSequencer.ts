import { useCallback, useEffect, useRef, useState } from 'react'
import * as Tone from 'tone'
import { SequencerPattern, SequencerPatternTrack } from '../project/definitions'
import { useAppStore } from '../store/useApp'

export interface TrackWithPlayer extends SequencerPatternTrack {
    player: Tone.Player
}

export const useStepSequencer = ({ pattern }: { pattern: SequencerPattern }) => {
    const [bars, setBars] = useState<number>(() => {
        if (pattern.tracks.length > 0) {
            return pattern.tracks[0].steps.length / 16
        }

        return 1
    })
    const [stepIndex, setStepIndex] = useState<number>(-1)
    const steps = bars * 4 * 4

    const setPatternTracks = useAppStore((state) => state.setSequencerPatternTracks)
    const setTracks = useCallback(
        (tracks: SequencerPatternTrack[]) => {
            setPatternTracks(pattern.id, tracks)
        },
        [pattern.id, setPatternTracks]
    )

    // set a new number of bars and fill all tracks with empty steps
    // if greater than current or remove steps if lower.
    const setBarsAndAdjustTracks = useCallback(
        (newBars: number) => {
            const newStepCount = newBars * 4 * 4

            setBars(newBars)
            setTracks(
                pattern.tracks.map((track) => {
                    const newSteps = track.steps.slice(0, newStepCount)
                    for (let i = 0; i < newStepCount - steps; i++) {
                        newSteps.push(0)
                    }

                    return {
                        ...track,
                        steps: newSteps,
                    }
                })
            )
        },
        [pattern.tracks, steps, setBars, setTracks]
    )

    // double current bars, compared to `setBarsAndAdjustTracks`,
    // this replicates existing steps
    const doubleBars = useCallback(() => {
        setBars((previous) => previous * 2)
        setTracks(
            pattern.tracks.map((track) => {
                const newSteps = track.steps.slice()
                track.steps.forEach((step) => {
                    newSteps.push(step)
                })

                return {
                    ...track,
                    steps: newSteps,
                }
            })
        )
    }, [pattern.tracks, setBars, setTracks])

    const updateSequencerPatternTrackSample = useAppStore(
        (state) => state.updateSequencerPatternTrackSample
    )
    const updateTrackSample = useCallback(
        (trackId: string, sampleId: string) => {
            updateSequencerPatternTrackSample(pattern.id, trackId, sampleId)
        },
        [updateSequencerPatternTrackSample, pattern.id]
    )

    const toggleTrack = useCallback(
        (trackId: string) => {
            setTracks(
                pattern.tracks.map((track) => {
                    if (track.id !== trackId) return track

                    return {
                        ...track,
                        isMuted: !track.isMuted,
                    }
                })
            )
        },
        [pattern.tracks, setTracks]
    )

    // toggle a track step, which is just a boolean flag
    // indicating if it's active or not
    const toggleStep = useCallback(
        (trackId: string, index: number) => {
            setTracks(
                pattern.tracks.map((track) => {
                    if (track.id !== trackId) return track

                    return {
                        ...track,
                        steps: track.steps.map((step, stepIndex) => {
                            if (stepIndex === index) return step === 0 ? 1 : 0
                            return step
                        }),
                    }
                })
            )
        },
        [pattern.tracks, setTracks]
    )

    const [isPlaying, setIsPlaying] = useState(false)
    const play = useCallback(() => {
        Tone.Transport.start()
        setIsPlaying(true)
    }, [setIsPlaying])
    const stop = useCallback(() => {
        Tone.Transport.stop()
        setIsPlaying(false)
    }, [setIsPlaying])

    // we use a ref for tracks so that we can pass it to the
    // main tick function, otherwise the tick function would
    // be continuously re-created as we edit the steps
    const tracksRef = useRef<TrackWithPlayer[]>()
    useEffect(() => {
        tracksRef.current = pattern.tracks
    }, [pattern.tracks])

    const [trackMeterValues, setTrackMeterValues] = useState<(number | null)[]>([])

    // main loop tick function, called by Tone scheduler
    const tick = useCallback(
        (time: number, index: number) => {
            Tone.Draw.schedule(() => {
                setStepIndex(index)
            }, time)

            if (tracksRef.current !== undefined) {
                tracksRef.current.forEach((track) => {
                    if (track.isMuted) return

                    const shouldPlay = track.steps[index] === 1
                    if (!shouldPlay) return

                    track.player.start(time, 0)
                })
            }
        },
        [setStepIndex, tracksRef]
    )

    useEffect(() => {
        const interval = setInterval(() => {
            if (!tracksRef.current || !isPlaying) return

            // setTrackMeterValues(
            //     tracksRef.current.map((track) => {
            //         if (track.isMuted) return null
            //         return track.meter.getValue() as number
            //     })
            // )
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, [isPlaying, tracksRef, setTrackMeterValues])

    // create a new sequence each time the tick function is updated
    // or the number of steps changes
    useEffect(() => {
        // @todo: add the ability to play the sequence from last time
        const sequence = new Tone.Sequence(
            tick,
            Array.from({ length: steps }).map((_, index) => index),
            '16n'
        ).start()

        return () => {
            sequence.dispose()
        }
    }, [tick, steps])

    return {
        bars,
        setBars: setBarsAndAdjustTracks,
        doubleBars,
        steps,
        stepIndex,
        setStepIndex,
        tracks: pattern.tracks,
        setTracks,
        toggleTrack,
        updateTrackSample,
        toggleStep,
        isPlaying,
        play,
        stop,
        trackMeterValues,
    }
}
