import { useMemo } from 'react'
import { scaleLinear, ScaleLinear } from 'd3-scale'

export const useControlScale = ({
    domain,
    range,
    isValid,
    tickStep,
    majorTickStep,
}: {
    domain: [number, number]
    range: [number, number]
    isValid: boolean
    tickStep: number
    majorTickStep: number
}) => {
    const domainMin = domain[0]
    const domainMax = domain[1]

    const rangeMin = range[0]
    const rangeMax = range[1]

    const scale: ScaleLinear<number, number> | undefined = useMemo(() => {
        if (!isValid) return undefined

        return scaleLinear().domain([domainMin, domainMax]).range([rangeMin, rangeMax])
    }, [isValid, domainMin, domainMax, rangeMin, rangeMax])

    const ticks: [number, number, boolean][] = useMemo(() => {
        if (scale === undefined) return []

        return scale.ticks(scale.domain()[1] / tickStep).map((tickValue) => {
            const tickX = scale(tickValue)
            const tickMod = Number((((tickValue * 100) % (majorTickStep * 100)) / 100).toFixed(2))
            const isMajor = tickMod === 0

            return [tickValue, tickX, isMajor]
        })
    }, [scale, tickStep])

    return {
        scale,
        ticks,
    }
}
