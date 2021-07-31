import { createElement } from 'react'
import styled from 'styled-components/macro'
import { useControlScale } from './useControlScale'
import { useAppStore } from '../../useApp'

const TICK_SPACE = 8

interface KnobProps {
    size: number
    value: number
    angleStart?: number
    angleEnd?: number
    tickStep?: number
    majorTickStep?: number
}

export const Knob = ({
    size,
    value,
    angleStart = 45,
    angleEnd = 315,
    tickStep = 0.1,
    majorTickStep = 0.5,
}: KnobProps) => {
    const skin = useAppStore((state) => state.skin)

    const { scale, ticks } = useControlScale({
        domain: [0, 1],
        range: [angleStart, angleEnd],
        isValid: true,
        tickStep,
        majorTickStep,
    })

    const rotation = scale ? scale(value) : 0
    const radius = (size - TICK_SPACE * 2) / 2

    return (
        <Container size={size}>
            <Layer>{createElement(skin.knob.base, { radius })}</Layer>
            <Svg width={size} height={size}>
                <g transform={`translate(${size / 2}, ${size / 2})`}>
                    <g transform={`rotate(${rotation})`}>
                        {createElement(skin.knob.indicator, { radius })}
                    </g>
                    {ticks.map(([tickValue, tickAngle, isMajor]) => (
                        <g key={tickValue} transform={`rotate(${tickAngle})`}>
                            {createElement(skin.knob.tick, { radius, isMajor })}
                        </g>
                    ))}
                </g>
            </Svg>
        </Container>
    )
}

const Container = styled.div<{
    size: number
}>`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    position: relative;
`

const Layer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Svg = styled.svg`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
`
