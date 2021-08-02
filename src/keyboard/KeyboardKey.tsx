import React, { useCallback } from 'react'
import styled from 'styled-components'
import * as Tone from 'tone'
import { lighten } from 'polished'
import { Note } from '@tonaljs/core'
import { Scale } from '@tonaljs/scale'

const SIZE = 52

interface KeyboardKeyProps {
    position: number
    note: Note
    scale: Scale
    synth: Tone.Synth
    isDisabled?: boolean
}

export const KeyboardKey = ({
    position,
    note,
    scale,
    synth,
    isDisabled = false,
}: KeyboardKeyProps) => {
    const handleClick = useCallback(() => {
        synth.triggerAttackRelease(note.name, '16n')
    }, [note, synth])

    return (
        <KeyboardKeyGraphic
            onClick={handleClick}
            isBlack={note.acc !== ''}
            isDisabled={isDisabled}
            isTonic={note.pc === scale.tonic}
            style={{
                left: position * SIZE,
            }}
        >
            <KeyName>{note.name}</KeyName>
        </KeyboardKeyGraphic>
    )
}

const KeyboardKeyGraphic = styled.div<{
    isBlack: boolean
    isDisabled: boolean
    isTonic: boolean
}>`
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: ${SIZE}px;
    height: ${(props) => (props.isBlack ? SIZE : SIZE * 2)}px;
    border: 1px solid ${(props) => props.theme.enclosure.background};
    cursor: pointer;
    border-radius: 3px;
    background-color: ${(props) =>
        props.isBlack
            ? props.theme.enclosure.backgroundDark
            : props.theme.enclosure.backgroundLight};
    color: ${(props) =>
        props.isBlack
            ? props.theme.enclosure.backgroundLight
            : props.theme.enclosure.backgroundDark};
    top: 0;
    position: absolute;
    z-index: ${(props) => (props.isBlack ? 100 : 10)};

    &:after {
        display: ${(props) => (props.isTonic ? 'flex' : 'none')};
        justify-content: center;
        align-items: center;
        font-size: 12px;
        content: 'T';
        position: absolute;
        left: calc(50% - 9px);
        bottom: -9px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: black;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        background-color: ${(props) => props.theme.enclosure.backgroundLight};
        box-shadow: 0 0 0 2px ${(props) => props.theme.enclosure.background};
    }

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
