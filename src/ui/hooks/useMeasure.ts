import { useRef, useState, useLayoutEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export interface MeasureBounds {
    left: number
    top: number
    width: number
    height: number
}

/**
 * This hook measures a DOM node passed via the returned measureRef using a ResizeObserver.
 * The position and size is retrievable via the bounds property of the returned object once the
 * component has mounted.
 */
export const useMeasure = <E extends HTMLElement = HTMLDivElement>() => {
    const requestAnimationFrameRef = useRef<number>()
    const measureRef = useRef<E>(null)
    const [bounds, setBounds] = useState<MeasureBounds>({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    })
    const [observer] = useState(
        () =>
            new ResizeObserver(([entry]) => {
                // Calling setState here immediately leads to a ResizeObserver infinite loop
                // because the observer calls this callback immediately after observe and so
                // constantly reacts to itself.
                // We therefore wrap it in a requestAnimationFrame to alleviate the issue.
                // see: https://github.com/airbnb/visx/pull/335
                requestAnimationFrameRef.current = requestAnimationFrame(() => {
                    setBounds(entry.contentRect)
                })
            })
    )

    useLayoutEffect(() => {
        if (measureRef.current) {
            observer.observe(measureRef.current)
        }

        return () => {
            if (requestAnimationFrameRef.current !== undefined) {
                cancelAnimationFrame(requestAnimationFrameRef.current)
            }

            observer.disconnect()
        }
    }, [])

    return { measureRef, bounds }
}
