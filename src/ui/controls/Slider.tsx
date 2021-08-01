import React, { createElement, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useMeasure } from '../hooks/useMeasure'
import { useControlScale } from './useControlScale'
import { useAppStore } from '../../useApp'

interface SliderProps {
    min?: number
    max?: number
    step?: number
    precision?: number
    tickStep?: number
    majorTickStep?: number
    value: number
    onChange: (value: number) => void
}

export const Slider = ({
    min = 0,
    max = 1,
    step = 0.05,
    precision,
    tickStep = 0.05,
    majorTickStep = 0.1,
    value,
    onChange,
}: SliderProps) => {
    const skin = useAppStore((state) => state.skin)

    const { measureRef, bounds } = useMeasure()

    const { scale, ticks } = useControlScale({
        domain: [min, max],
        range: [0, bounds.width],
        isValid: bounds.width > 0,
        tickStep,
        majorTickStep,
    })

    const [isActive, setIsActive] = useState(false)
    const activate = useCallback(() => setIsActive(true), [setIsActive])
    const deactivate = useCallback(() => setIsActive(false), [setIsActive])

    const setValueFromPosition = useCallback(
        (position: number) => {
            if (scale) {
                const clampedPosition = Math.min(
                    Math.max(position, scale.range()[0]),
                    scale.range()[1]
                )
                let newValue = Math.floor(scale.invert(clampedPosition) / step) * step
                if (precision !== undefined) {
                    newValue = Number(newValue.toFixed(precision))
                }
                onChange(newValue)
            }
        },
        [scale, step, onChange, precision]
    )

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (measureRef.current) {
                const xOrigin = window.pageXOffset + measureRef.current.getBoundingClientRect().left
                setValueFromPosition(event.pageX - xOrigin)
            }
        },
        [measureRef, setValueFromPosition]
    )

    useEffect(() => {
        const documentMouseMoveListener = (event: MouseEvent) => handleMouseMove(event)
        const documentMouseUpListener: EventListener = () => deactivate()

        if (isActive) {
            document.addEventListener('mousemove', documentMouseMoveListener)
            document.addEventListener('mouseup', documentMouseUpListener)
        }

        return () => {
            document.removeEventListener('mousemove', documentMouseMoveListener)
            document.removeEventListener('mouseup', documentMouseUpListener)
        }
    }, [isActive, measureRef, handleMouseMove, deactivate])

    return (
        <Container>
            <TrackContainer ref={measureRef}>
                {createElement(skin.slider.track)}
                {scale && (
                    <>
                        {createElement(skin.slider.trackFill, {
                            width: scale(value),
                        })}
                        {createElement(skin.slider.thumb, {
                            x: scale(value),
                            onMouseDown: activate,
                        })}
                    </>
                )}
            </TrackContainer>
            <Ticks>
                {scale && (
                    <>
                        {ticks.map(([tickValue, tickX, isMajor]) => (
                            <Tick
                                key={tickValue}
                                style={{ left: `${tickX}px` }}
                                isMajor={isMajor}
                            />
                        ))}
                    </>
                )}
            </Ticks>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 0 12px;
    user-select: none;
`

const TrackContainer = styled.div`
    position: relative;
    width: 100%;
    height: 18px;
`

const Ticks = styled.div`
    position: relative;
    height: 8px;
`

const Tick = styled.span<{
    isMajor: boolean
}>`
    display: block;
    position: absolute;
    top: 0;
    width: 1px;
    height: ${(props) => (props.isMajor ? 100 : 60)}%;
    opacity: ${(props) => (props.isMajor ? 1 : 0.5)};
    background-color: ${(props) => props.theme.colors.textLight};
`
