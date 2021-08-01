import { useCallback } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { VSpacer } from '../ui/Spacer'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { CloseButton } from '../ui/controls/CloseButton'
import { useAppStore } from '../store/useApp'
import { Effect } from './definitions'
import styled from 'styled-components/macro'

interface EffectHeaderProps {
    effect: Effect
}

export const EffectHeader = ({ effect }: EffectHeaderProps) => {
    const closeEffect = useAppStore((state) => state.closeEffect)

    const handleClose = useCallback(() => {
        closeEffect(effect.id)
    }, [closeEffect, effect.id])

    return (
        <>
            <Header>
                <EffectType>
                    <FiArrowRight />
                    <ComponentNameHighlight>{effect.type}</ComponentNameHighlight>
                    <FiArrowRight />
                </EffectType>
                <CloseButton onClose={handleClose} />
            </Header>
            <VSpacer />
        </>
    )
}

const Header = styled(ComponentHeader)`
    justify-content: space-between;
`

const EffectType = styled(ComponentName)`
    svg {
        &:first-child {
            margin-right: 6px;
        }
        &:last-child {
            margin-left: 6px;
        }
    }
`
