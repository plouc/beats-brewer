import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'
import { PadConfig, PadIndex } from './definitions'
import { useCallback } from 'react'

interface PadProps {
    pad: PadConfig
    isEditing?: boolean
    onClick: (padIndex: PadIndex) => void
}

export const Pad = ({ pad, isEditing = false, onClick }: PadProps) => {
    const handleClick = useCallback(() => {
        onClick(pad.index)
    }, [pad.index, onClick])

    return (
        <PadButton color={pad.color} isEditing={isEditing} onClick={handleClick}>
            <PadLabel>.{`${pad.index + 1}`.padStart(2, '0')}</PadLabel>
        </PadButton>
    )
}

const PadButton = styled.div<{
    color: string
    isEditing: boolean
}>`
    display: flex;
    padding: 5px;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    cursor: pointer;
    user-select: none;
    border-radius: 3px;
    transition: 200ms linear background-color, 200ms linear color;

    ${(props) => {
        if (props.isEditing) {
            return css`
                background-color: rgba(0, 0, 0, 0);
                color: ${lighten(0.15, props.color)};
                box-shadow: 0 0 0 1px ${props.color} inset;

                &:hover {
                    background-color: ${props.color};
                    color: #222;
                }
            `
        }

        return css`
            background-color: ${props.color};
            color: #222;
            box-shadow: 0 2px 0 ${darken(0.3, props.color)}, 1px 4px 2px rgba(0, 0, 0, 0.35);

            &:hover {
                background-color: ${lighten(0.15, props.color)};
            }
        `
    }}
`

const PadLabel = styled.div`
    font-size: 9px;
    text-transform: uppercase;
    font-family: 'IBM Plex Mono', monospace;
`
