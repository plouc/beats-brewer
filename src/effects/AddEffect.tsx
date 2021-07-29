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

interface AddEffectProps {
    channel: number
}

export const AddEffect = ({ channel }: AddEffectProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = useCallback(() => {
        setIsOpen(true)
    }, [setIsOpen])
    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    return (
        <>
            <RoundIconButton onClick={handleOpen}>
                <FiPlus />
            </RoundIconButton>
            {isOpen && (
                <Modal onClose={handleClose}>
                    <Enclosure>
                        <Header>
                            <ComponentName>
                                <ComponentNameHighlight>Add Effect</ComponentNameHighlight>
                            </ComponentName>
                            <CloseButton onClose={handleClose} />
                        </Header>
                        <VSpacer />
                        <Content>
                            <Button>Distortion</Button>
                            <VSpacer size="small" />
                            <Button>Reverb</Button>
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
