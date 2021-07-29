import { Fragment } from 'react'
import styled from 'styled-components/macro'
import { darken } from 'polished'
import { FiArrowDown, FiPlus } from 'react-icons/fi'
import { RoundIconButton } from '../ui/controls/RoundIconButton'
import { Effect } from '../effects/definitions'
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
                    <Fragment key={effect.id}>
                        <EffectLabel
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
            <RoundIconButton>
                <FiPlus />
            </RoundIconButton>
        </>
    )
}

const EffectLabel = styled.div`
    background-color: ${(props) => darken(0.02, props.theme.enclosure.background)};
    color: ${(props) => props.theme.colors.text};
    font-size: 10px;
    padding: 4px 6px;
    border-radius: 2px;
    max-width: 68px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
    cursor: pointer;
    user-select: none;

    &:hover {
        color: ${(props) => props.theme.colors.accent};
    }
`

const EffectOutput = styled.div`
    font-size: 10px;
    margin-bottom: 3px;
    color: ${(props) => props.theme.colors.textLight};
`
