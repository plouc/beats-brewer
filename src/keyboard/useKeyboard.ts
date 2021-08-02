import { useMemo, useState, useCallback } from 'react'
import { Range } from '@tonaljs/tonal'
import { note, Note } from '@tonaljs/core'
import { Scale, get as getScale } from '@tonaljs/scale'
import { synthByType, SynthType } from '../synths/definitions'
import { getScaleChords } from '../music_theory/chords'

const DEFAULT_OCTAVE = 3

export const useKeyboard = () => {
    const [scale, setScale] = useState<Scale>(getScale('C major'))

    const [octave, setOctave] = useState(DEFAULT_OCTAVE)

    const [synthType, setSynthType] = useState<SynthType>('poly')
    const synth = useMemo(() => {
        return new synthByType[synthType]().toDestination()
    }, [synthType])

    const [chordModeEnabled, setChordModeEnabled] = useState(false)
    const toggleChordMode = useCallback(() => {
        setChordModeEnabled((previous) => !previous)
    }, [setChordModeEnabled])

    const notes: Note[] = useMemo(() => {
        return Range.chromatic([`C${octave}`, `C${octave + 2}`], { sharps: true }).map(
            (name) => note(name) as Note
        )
    }, [octave])

    const [hoveredNote, setHoveredNote] = useState<string | null>(null)

    console.log(getScaleChords(scale))

    const notesWithPosition = useMemo(() => {
        const withPosition: [Note, number][] = []
        let position = 0
        for (let index = 0; index < notes.length; index++) {
            const note = notes[index]
            const nextNote = notes[index + 1]
            withPosition.push([note, position])

            if ((nextNote !== undefined && nextNote.acc !== '') || note.acc !== '') {
                position += 0.5
            } else {
                position += 1
            }
        }

        return withPosition
    }, [notes])

    return {
        scale,
        setScale,
        octave,
        setOctave,
        synthType,
        setSynthType,
        synth,
        chordModeEnabled,
        toggleChordMode,
        notes: notesWithPosition,
    }
}
