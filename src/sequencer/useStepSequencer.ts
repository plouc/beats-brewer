import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as Tone from 'tone'
import { DrumKit } from '../drums/kit'

export interface TrackData {
    sampleId: string
    steps: boolean[]
}

export const useStepSequencer = ({ drumKit }: { drumKit: DrumKit }) => {
    const [bars, setBars] = useState<number>(1)
    const [stepIndex, setStepIndex] = useState<number>(-1)
    const steps = bars * 4 * 4

    const [tracks, setTracks] = useState<TrackData[]>(() =>
        drumKit.samples.map((sample) => ({
            sampleId: sample.id,
            steps: Array.from({ length: steps }).fill(false) as boolean[],
        }))
    )

    // set a new number of bars and fill all tracks with empty steps
    // if greater than current or remove steps if lower.
    const setBarsAndAdjustTracks = useCallback(
        (newBars: number) => {
            const newStepCount = newBars * 4 * 4

            setBars(newBars)
            setTracks((tracks) => {
                return tracks.map((track) => {
                    const newSteps = track.steps.slice(0, newStepCount)
                    for (let i = 0; i < newStepCount - steps; i++) {
                        newSteps.push(false)
                    }

                    return {
                        ...track,
                        steps: newSteps,
                    }
                })
            })
        },
        [steps, setBars, setTracks]
    )

    // double current bars, compared to `setBarsAndAdjustTracks`,
    // this replicates existing steps
    const doubleBars = useCallback(() => {
        setBars((previous) => previous * 2)
        setTracks((tracks) => {
            return tracks.map((track) => {
                const newSteps = track.steps.slice()
                track.steps.forEach((step) => {
                    newSteps.push(step)
                })

                return {
                    ...track,
                    steps: newSteps,
                }
            })
        })
    }, [setBars, setTracks])

    // toggle a track step, which is just a boolean flag
    // indicating if it's active or not
    const toggleStep = useCallback(
        (sampleId: string, index: number) => {
            setTracks((tracks) =>
                tracks.map((track) => {
                    if (track.sampleId !== sampleId) return track

                    return {
                        ...track,
                        steps: track.steps.map((step, stepIndex) => {
                            if (stepIndex === index) return !step
                            return step
                        }),
                    }
                })
            )
        },
        [setTracks]
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
    const tracksRef = useRef<TrackData[]>()
    useEffect(() => {
        tracksRef.current = tracks
    }, [tracks])

    // main loop tick function, called by Tone scheduler
    const tick = useCallback(
        (time: number, index: number) => {
            setStepIndex(index)

            if (tracksRef.current !== undefined) {
                tracksRef.current.forEach((track) => {
                    const shouldPlay = track.steps[index]
                    const sample = drumKit.getSample(track.sampleId)
                    if (shouldPlay && sample.isReady) {
                        sample.player!.start()
                    }
                })
            }
        },
        [setStepIndex, drumKit, tracksRef]
    )

    // create a new sequence each time the tick function is updated
    // or the number of steps changes
    useEffect(() => {
        // create the sequence and starts it
        // @todo: add the ability to play the sequence from last time
        const sequence = new Tone.Sequence(
            tick,
            Array.from({ length: steps }).map((_, index) => index),
            '8n'
        ).start()

        return () => {
            sequence.dispose()
        }
    }, [tick, steps])

    // init the drum kit, making sure all samples are initialized
    useEffect(() => {
        drumKit.init()
    }, [drumKit])

    return {
        bars,
        setBars: setBarsAndAdjustTracks,
        doubleBars,
        steps,
        stepIndex,
        setStepIndex,
        tracks,
        setTracks,
        toggleStep,
        isPlaying,
        play,
        stop,
    }
}
