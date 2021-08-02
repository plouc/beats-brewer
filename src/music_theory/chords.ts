import { Scale, scaleChords } from '@tonaljs/scale'
import { getChord, Chord } from '@tonaljs/chord'

type ChordsByType = Record<
    string,
    {
        type: string
        chords: Chord[]
    }
>

export const getScaleChords = (scale: Scale) => {
    const chordNames = scaleChords(scale.name)
    const chords = chordNames.map((name) => {
        return getChord(name, scale.tonic as string)
    })

    const chordsByType: ChordsByType = chords.reduce((acc, chord) => {
        let chordType = chord.type
        if (chordType === '') return acc

        if (!acc[chordType]) {
            acc[chordType] = {
                type: chordType,
                chords: [],
            }
        }

        acc[chordType].chords.push(chord)

        return acc
    }, {} as ChordsByType)

    return Object.values(chordsByType)
}
