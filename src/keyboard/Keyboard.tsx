import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Scale } from '@tonaljs/tonal'
import { HSpacer, VSpacer } from '../ui/Spacer'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { NOTES, Note, Octave } from '../music_theory/definitions'
import { OctaveSelector } from '../music_theory/OctaveSelector'
import { ScaleSelector } from '../music_theory/ScaleSelector'
import { SynthSelector } from '../synths/SynthSelector'
import { synthByType, SynthType } from '../synths/definitions'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { KeyboardKey } from './KeyboardKey'

const DOUBLED_NOTES = [...NOTES, ...NOTES]

export const Keyboard = () => {
    const [octave, setOctave] = useState<Octave>(4)
    const [scale, setScale] = useState<any>(Scale.get('major'))
    const [synthType, setSynthType] = useState<SynthType>('poly')
    const synth = useMemo(() => {
        return new synthByType[synthType]().toDestination()
    }, [synthType])

    const notesWithPosition = useMemo(() => {
        const withPosition: [Note, number][] = []
        let position = 0
        for (let index = 0; index < DOUBLED_NOTES.length; index++) {
            const note = DOUBLED_NOTES[index]
            const nextNote = DOUBLED_NOTES[index + 1]
            withPosition.push([note as Note, position])

            if ((nextNote !== undefined && nextNote.endsWith('#')) || note.endsWith('#')) {
                position += 0.5
            } else {
                position += 1
            }
        }

        return withPosition
    }, [])

    return (
        <Desk>
            <Enclosure>
                <ComponentHeader>
                    <ComponentName>
                        Synth&nbsp;
                        <ComponentNameHighlight>{synthType}</ComponentNameHighlight>
                    </ComponentName>
                    <HSpacer />
                    <SynthSelector synth={synthType} onChange={setSynthType} />
                    <HSpacer />
                    <OctaveSelector current={octave} onChange={setOctave} />
                    <HSpacer />
                    <ScaleSelector scale={scale} onChange={setScale} />
                </ComponentHeader>
                <VSpacer />
                <Keys>
                    {notesWithPosition.map(([note, position], index) => {
                        return (
                            <KeyboardKey
                                key={index}
                                position={position}
                                note={note}
                                octave={octave}
                                synth={synth}
                            />
                        )
                    })}
                </Keys>
            </Enclosure>
        </Desk>
    )
}

const Keys = styled.div`
    height: 200px;
    position: relative;
    margin: 0 6px 6px;
`
