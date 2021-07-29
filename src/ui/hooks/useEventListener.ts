import { useEffect } from 'react'

type EventMap = DocumentEventMap | WindowEventMap

/**
 * This hook can be used to attach event listener to the window or document,
 * it will take care of removing/updating the listener if it changes,
 * and will also remove the listener when the component it's attached
 * to is unmounted.
 */
export const useEventListener = <E extends keyof EventMap>(
    target: Document | Window,
    eventType: E,
    listener: EventListener
) => {
    useEffect(() => {
        if (target !== document && target !== window) {
            throw new Error('target for useEventListener must be one of document or window.')
        }

        target.addEventListener(eventType, listener)

        return () => {
            target.removeEventListener(eventType, listener)
        }
    }, [target, eventType, listener])
}
