import { useCallback, useState } from 'react'
import styled from 'styled-components/macro'
import { FiExternalLink } from 'react-icons/fi'
import { Modal } from './Modal'
import { HardwareButton } from './controls/HardwareButton'
import { Enclosure } from './Enclosure'
import { ComponentHeader } from './ComponentHeader'
import { ComponentName, ComponentNameHighlight } from './ComponentName'
import { CloseButton } from './controls/CloseButton'
import { HSpacer, VSpacer } from './Spacer'
import { demoProjects } from '../library/demoProjects'
import { useAppStore } from '../useApp'

export const WelcomeModal = () => {
    const [isOpen, setIsOpen] = useState(true)
    const closeModal = useCallback(() => {
        setIsOpen(false)
    }, [setIsOpen])

    const loadProject = useAppStore((state) => state.loadProject)
    const openDemoProject = useCallback(() => {
        closeModal()
        loadProject(demoProjects[0])
    }, [loadProject, closeModal])

    if (!isOpen) return null

    return (
        <Modal onClose={closeModal}>
            <Enclosure>
                <Header>
                    <ComponentName>
                        <ComponentNameHighlight>Welcome</ComponentNameHighlight>
                    </ComponentName>
                    <CloseButton onClose={closeModal} />
                </Header>
                <VSpacer />
                <Message>
                    <p>
                        Welcome to <strong>Beats Brewer</strong>, this project is currently a
                        prototype, meaning that some features are still missing, and things might
                        break, sorry for that.
                    </p>
                    <p>
                        For now, the best way to get started is to use one of the{' '}
                        <strong>demo projects</strong> that you can find in the explorer.
                    </p>
                    <OpenDemoProjectContainer>
                        <HardwareButton onClick={openDemoProject}>
                            <strong>Open a demo project</strong>
                            <HSpacer size="small" />
                            <FiExternalLink />
                        </HardwareButton>
                    </OpenDemoProjectContainer>
                    <p>
                        This is an open source project, and you can find the source code here:{' '}
                        <a
                            href="https://github.com/plouc/beats-brewer"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://github.com/plouc/beats-brewer
                        </a>
                        .
                    </p>
                    <p>
                        Because this application uses audio,{' '}
                        <strong>
                            please make sure to check the volume of your speakers or headphones
                        </strong>
                        !
                    </p>
                </Message>
            </Enclosure>
        </Modal>
    )
}

const Header = styled(ComponentHeader)`
    justify-content: space-between;
`

const Message = styled.div`
    width: 360px;
    font-size: 12px;
    line-height: 18px;

    p {
        margin: 0 0 9px;
    }
`

const OpenDemoProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 9px;

    svg {
        font-size: 14px;
    }
`
