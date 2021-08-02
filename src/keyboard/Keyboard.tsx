import React from 'react'
import styled from 'styled-components'
import { HSpacer, VSpacer } from '../ui/Spacer'
import { Desk } from '../ui/Desk'
import { Enclosure } from '../ui/Enclosure'
import { OctaveSelector } from '../music_theory/OctaveSelector'
import { ScaleSelector } from '../music_theory/ScaleSelector'
import { SynthSelector } from '../synths/SynthSelector'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { KeyboardKey } from './KeyboardKey'
import { HardwareButton } from '../ui/controls/HardwareButton'
import { useKeyboard } from './useKeyboard'

export const Keyboard = () => {
    const {
        octave,
        setOctave,
        scale,
        setScale,
        synthType,
        setSynthType,
        synth,
        chordModeEnabled,
        toggleChordMode,
        notes,
    } = useKeyboard()

    return (
        <Desk>
            <Enclosure>
                <ComponentHeader>
                    <ComponentName>
                        Synth&nbsp;
                        <ComponentNameHighlight>{synthType}</ComponentNameHighlight>
                    </ComponentName>
                    <HSpacer />
                    <HardwareButton onClick={toggleChordMode} isPressed={chordModeEnabled}>
                        Chord mode
                    </HardwareButton>
                    <HSpacer />
                    <SynthSelector synth={synthType} onChange={setSynthType} />
                    <HSpacer />
                    <OctaveSelector current={octave} onChange={setOctave} />
                    <HSpacer />
                    <ScaleSelector scale={scale} onChange={setScale} />
                </ComponentHeader>
                <VSpacer />
                <Keys>
                    {notes.map(([note, position], index) => {
                        return (
                            <KeyboardKey
                                key={index}
                                position={position}
                                note={note}
                                scale={scale}
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
