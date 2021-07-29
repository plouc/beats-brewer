import { PropsWithChildren, useCallback } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components/macro'
import { rgba } from 'polished'
import { useEventListener } from './hooks/useEventListener'

interface ModalProps {
    onClose: () => void
    shouldCloseOnOutsideClick?: boolean
    shouldCloseOnEscKey?: boolean
}

export const Modal = ({
    children,
    onClose,
    shouldCloseOnOutsideClick = true,
    shouldCloseOnEscKey = true,
}: PropsWithChildren<ModalProps>) => {
    // Allows to close the modal using `ESC` key if `shouldCloseOnEscKey` is `true`.
    const onKeydown = useCallback(
        (event) => {
            if (!shouldCloseOnEscKey) return

            if (event.key === 'Escape' || event.key === 'Esc' /* IE */) {
                onClose()
            }
        },
        [onClose, shouldCloseOnEscKey]
    )
    useEventListener(document, 'keydown', onKeydown)

    const handleOverlayClick = useCallback(() => {
        if (!shouldCloseOnOutsideClick) {
            return
        }

        onClose()
    }, [onClose, shouldCloseOnOutsideClick])

    // as Modal is a child of Overlay and clicking Overlay
    // could close the modal depending on the `shouldCloseOnOutsideClick` property,
    // we must prevent the click event on the modal itself from triggering the close handler.
    const preventClosePropagation = useCallback((event) => event.stopPropagation(), [])

    return createPortal(
        <Overlay onClick={handleOverlayClick}>
            <Container onClick={preventClosePropagation}>{children}</Container>
        </Overlay>,
        document.body
    )
}

const Overlay = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    box-sizing: border-box;
    z-index: 100;
    background-color: ${(props) => rgba(props.theme.colors.background, 0.66)};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    user-select: none;
`

const Container = styled.div`
    position: relative;
    z-index: 101;
    min-width: 260px;
    min-height: 120px;
`
