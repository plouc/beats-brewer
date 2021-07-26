import { Fragment } from 'react'
import styled from 'styled-components/macro'
import { FiArrowDown } from 'react-icons/fi'
import { Effect } from '../effects/definitions'
import { darken } from 'polished'
import { useAppStore } from '../useApp'

interface MixerChannelEffectsProps {
    effects: Effect[]
}

export const MixerChannelEffects = ({ effects }: MixerChannelEffectsProps) => {
    const openEffect = useAppStore((state) => state.openEffect)

    return (
        <>
            {effects.map((effect, effectIndex) => {
                return (
                    <Fragment>
                        <EffectLabel
                            key={effect.id}
                            onClick={() => {
                                openEffect(effect.id)
                            }}
                        >
                            {effect.acronym}
                        </EffectLabel>
                        <EffectOutput>
                            <FiArrowDown />
                        </EffectOutput>
                    </Fragment>
                )
            })}
        </>
    )
}

const EffectLabel = styled.div`
    background-color: ${(props) => darken(0.02, props.theme.colors.enclosure.border)};
    color: ${(props) => props.theme.colors.textLight};
    font-size: 11px;
    padding: 4px 6px;
    border-radius: 2px;
    cursor: pointer;
    max-width: 68px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;

    &:hover {
        color: ${(props) => props.theme.colors.text};
    }
`

const EffectOutput = styled.div`
    font-size: 10px;
    margin-bottom: 3px;
    color: ${(props) => props.theme.colors.textLight};
`
