import styled from 'styled-components/macro'
import { darken, lighten, rgba } from 'polished'
import { useMeasure } from '../useMeasure'
import { useControlScale } from './useControlScale'

interface SliderControlProps {
    min?: number
    max?: number
    step?: number
    tickStep?: number
    majorTickStep?: number
    value: number
}

export const SliderControl = ({
    min = 0,
    max = 1,
    step = 0.05,
    tickStep = 0.05,
    majorTickStep = 0.1,
    value,
}: SliderControlProps) => {
    const { measureRef, bounds } = useMeasure()

    const { scale, ticks } = useControlScale({
        domain: [min, max],
        range: [0, bounds.width],
        isValid: bounds.width > 0,
        tickStep,
        majorTickStep,
    })

    return (
        <Container>
            <TrackContainer ref={measureRef}>
                <Track />
                {scale && (
                    <>
                        <TrackFill width={scale(value)} />
                        <Button x={scale(value)} />
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
`

const TrackContainer = styled.div`
    position: relative;
    width: 100%;
    height: 18px;
`

const Track = styled.div`
    position: absolute;
    top: calc(50% - 2px);
    left: -2px;
    width: calc(100% + 4px);
    height: 4px;
    background-color: ${(props) => props.theme.enclosure.backgroundDark};
    border-radius: 2px;
`

const TrackFill = styled.div<{
    width: number
}>`
    position: absolute;
    top: calc(50% - 2px);
    left: -2px;
    width: ${(props) => props.width + 2}px;
    height: 4px;
    background-color: ${(props) => props.theme.enclosure.backgroundLight};
    border: 1px solid ${(props) => darken(0.04, props.theme.enclosure.backgroundDark)};
    border-radius: 2px 0 0 2px;
`

const Button = styled.div<{
    x: number
}>`
    position: absolute;
    top: calc(50% - 7px);
    left: ${(props) => props.x}px;
    margin-left: -12px;
    width: 24px;
    height: 14px;
    background-color: ${(props) => lighten(0.03, props.theme.colors.alternateMaterial.background)};
    border-radius: 2px;
    cursor: pointer;
    box-shadow: inset -1px 0 0 ${(props) => props.theme.colors.alternateMaterial.backgroundDark},
        inset 1px 0 0 ${(props) => props.theme.colors.alternateMaterial.backgroundLight},
        inset 0 3px 0 ${(props) => props.theme.colors.alternateMaterial.backgroundLight},
        inset 0 4px 0
            ${(props) => lighten(0.08, props.theme.colors.alternateMaterial.backgroundLight)},
        inset 0 -3px 0 ${(props) => props.theme.colors.alternateMaterial.backgroundDark},
        inset 0 -4px 0 ${(props) => darken(0.04, props.theme.colors.alternateMaterial.backgroundDark)},
        0 0 0 1px ${(props) => props.theme.enclosure.innerCastShadowColorDark},
        0 4px 2px ${(props) => props.theme.enclosure.innerCastShadowColor};
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
