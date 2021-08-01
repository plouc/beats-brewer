import { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import { FiPlus } from 'react-icons/fi'
import { RoundIconButton } from '../ui/controls/RoundIconButton'
import { Modal } from '../ui/Modal'
import { Enclosure } from '../ui/Enclosure'
import { HardwareButton } from '../ui/controls/HardwareButton'
import { ComponentHeader } from '../ui/ComponentHeader'
import { ComponentName, ComponentNameHighlight } from '../ui/ComponentName'
import { VSpacer } from '../ui/Spacer'
import { CloseButton } from '../ui/controls/CloseButton'
import { useAppStore } from '../store/useApp'
import { EffectType } from './definitions'

interface AddEffectProps {
    channel: number
}

export const AddEffect = ({ channel }: AddEffectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])
    const closeModal = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    const addEffectToChannel = useAppStore((state) => state.addEffectToChannel)
    const addEffect = useCallback(
        (effectType: EffectType) => {
            closeModal()
            addEffectToChannel(effectType, channel)
        },
        [addEffectToChannel, channel, closeModal]
    )
    const addDistortion = useCallback(() => {
        addEffect('distortion')
    }, [addEffect])
    const addReverb = useCallback(() => {
        addEffect('reverb')
    }, [addEffect])

    return (
        <>
            <RoundIconButton onClick={openModal}>
                <FiPlus />
            </RoundIconButton>
            {isOpen && (
                <Modal onClose={closeModal}>
                    <Enclosure>
                        <Header>
                            <ComponentName>
                                <ComponentNameHighlight>Add Effect</ComponentNameHighlight>
                            </ComponentName>
                            <CloseButton onClose={closeModal} />
                        </Header>
                        <VSpacer />
                        <Content>
                            <Button onClick={addDistortion}>Distortion</Button>
                            <VSpacer size="small" />
                            <Button onClick={addReverb}>Reverb</Button>
                        </Content>
                        <VSpacer size="small" />
                    </Enclosure>
                </Modal>
            )}
        </>
    )
}

const Header = styled(ComponentHeader)`
    justify-content: space-between;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Button = styled(HardwareButton)`
    width: 100%;
    font-weight: 600;
`
