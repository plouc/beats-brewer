import styled from 'styled-components/macro'
import { useControlScale } from './useControlScale'
import { darken, lighten } from 'polished'

const TICK_SIZE = 6
const TICK_PADDING = 1
const OUTER_CIRCLE_THICKNESS = 3

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
    const { scale, ticks } = useControlScale({
        domain: [0, 1],
        range: [angleStart, angleEnd],
        isValid: true,
        tickStep,
        majorTickStep,
    })

    const rotation = scale ? scale(value) : 0
    const radius = (size - TICK_SIZE * 2 - OUTER_CIRCLE_THICKNESS * 2 - TICK_PADDING * 2) / 2

    const tickY = radius + OUTER_CIRCLE_THICKNESS + TICK_PADDING

    return (
        <Container size={size}>
            <Layer>
                <OuterCircle radius={radius + OUTER_CIRCLE_THICKNESS} />
            </Layer>
            <Layer>
                <MainCircle radius={radius} />
            </Layer>
            <Svg width={size} height={size}>
                <g transform={`translate(${size / 2}, ${size / 2})`}>
                    <g transform={`rotate(${rotation})`}>
                        <Indicator cx={0} cy={radius * 0.36} r={1.5} />
                    </g>
                    {ticks.map(([tickValue, tickAngle, isMajor]) => (
                        <g key={tickValue} transform={`rotate(${tickAngle})`}>
                            <Tick
                                isMajor={isMajor}
                                y1={tickY}
                                y2={tickY + (isMajor ? TICK_SIZE : TICK_SIZE * 0.7)}
                            />
                            <text y={80} style={{ fontSize: 10 }} textAnchor="middle">
                                {tickValue}
                            </text>
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

const OuterCircle = styled.div<{
    radius: number
}>`
    background-color: ${(props) => props.theme.enclosure.backgroundDark};
    width: ${(props) => props.radius * 2}px;
    height: ${(props) => props.radius * 2}px;
    border-radius: ${(props) => props.radius}px;
    box-shadow: inset 0 1px 1px ${(props) => darken(0.15, props.theme.enclosure.backgroundDark)};
`

const MainCircle = styled.div<{
    radius: number
}>`
    position: relative;
    background-color: ${(props) => props.theme.enclosure.background};
    background: linear-gradient(
        180deg,
        ${(props) => props.theme.colors.alternateMaterial.backgroundLight},
        ${(props) => darken(0.04, props.theme.colors.alternateMaterial.backgroundDark)}
    );
    width: ${(props) => props.radius * 2}px;
    height: ${(props) => props.radius * 2}px;
    border-radius: ${(props) => props.radius}px;
    box-shadow: inset 0 1px 0
            ${(props) => lighten(0.1, props.theme.colors.alternateMaterial.backgroundLight)},
        inset 0 -1px 0 ${(props) => darken(0.02, props.theme.colors.alternateMaterial.background)},
        0 2px 1px ${(props) => props.theme.enclosure.innerCastShadowColorDark},
        0 7px 5px ${(props) => props.theme.enclosure.innerCastShadowColorDark};

    &:after {
        content: '';
        position: absolute;
        width: ${(props) => props.radius * 2 * 0.7}px;
        height: ${(props) => props.radius * 2 * 0.7}px;
        top: ${(props) => props.radius * 2 * 0.15}px;
        left: ${(props) => props.radius * 2 * 0.15}px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.alternateMaterial.background};
        box-shadow: 0 -3px 3px ${(props) => lighten(0.1, props.theme.colors.alternateMaterial.backgroundLight)};
    }
`

const Svg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
`

const Indicator = styled.circle`
    fill: ${(props) => darken(0.15, props.theme.colors.alternateMaterial.backgroundDark)};
`

const Tick = styled.line<{
    isMajor: boolean
}>`
    fill: none;
    stroke-width: 1px;
    stroke: ${(props) => props.theme.colors.textLight};
    opacity: ${(props) => (props.isMajor ? 1 : 0.5)};
`
