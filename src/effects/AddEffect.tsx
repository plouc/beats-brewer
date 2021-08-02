import { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import { FiPlus } from 'react-icons/fi'
import { RoundButton } from '../ui/controls/RoundButton'
import { Modal } from '../ui/Modal'
import { Enclosure } from '../ui/Enclosure'
import { Button } from '../ui/controls/Button'
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
            <RoundButton onClick={openModal}>
                <FiPlus />
            </RoundButton>
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
                            <CustomButton onClick={addDistortion}>Distortion</CustomButton>
                            <VSpacer size="small" />
                            <CustomButton onClick={addReverb}>Reverb</CustomButton>
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

const CustomButton = styled(Button)`
    width: 100%;
    font-weight: 600;
`
