import React, { useCallback } from 'react'
import styled from 'styled-components'
import * as Tone from 'tone'
import { lighten } from 'polished'
import { Note, Octave } from '../music_theory/definitions'

interface KeyboardKeyProps {
    position: number
    note: Note
    octave: Octave
    synth: Tone.Synth
    isDisabled?: boolean
}

export const KeyboardKey = ({
    position,
    note,
    octave,
    synth,
    isDisabled = false,
}: KeyboardKeyProps) => {
    const handleClick = useCallback(() => {
        synth.triggerAttackRelease(`${note}${octave}`, '16n')
    }, [note, octave, synth])

    return (
        <KeyboardKeyGraphic
            onClick={handleClick}
            isBlack={note.endsWith('#')}
            isDisabled={isDisabled}
            style={{
                left: position * 54,
            }}
        >
            <KeyName>
                {note}
                {octave}
            </KeyName>
        </KeyboardKeyGraphic>
    )
}

const KeyboardKeyGraphic = styled.div<{
    isBlack: boolean
    isDisabled: boolean
}>`
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: ${(props) => (props.isBlack ? 34 : 54)}px;
    margin-left: ${(props) => (props.isBlack ? 10 : 0)}px;
    height: ${(props) => (props.isBlack ? 120 : 200)}px;
    border: 1px solid ${(props) => props.theme.colors.enclosure.background};
    cursor: pointer;
    border-radius: 3px;
    background-color: ${(props) => (props.isBlack ? '#242425' : props.theme.colors.accent)};
    color: ${(props) => (props.isBlack ? '#bbb' : '#333')};
    top: 0;
    position: absolute;
    z-index: ${(props) => (props.isBlack ? 100 : 10)};

    &:hover {
        background-color: ${(props) =>
            props.isBlack ? '#222' : lighten(0.12, props.theme.colors.accent)};
    }
`

const KeyName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    width: 52px;
    height: 52px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
`
