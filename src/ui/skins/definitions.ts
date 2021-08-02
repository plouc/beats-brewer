import { PropsWithChildren } from 'react'
import { DefaultTheme, StyledComponent } from 'styled-components'

export interface Skin {
    id: string
    name: string
    theme: DefaultTheme
    enclosure: (props: PropsWithChildren<{}>) => JSX.Element
    button: {
        basic: StyledComponent<
            'div',
            DefaultTheme,
            {
                isPressed?: boolean
                isInactive?: boolean
                hasNext?: boolean
                hasPrevious?: boolean
            }
        >
        square: StyledComponent<
            'div',
            DefaultTheme,
            {
                isPressed?: boolean
                isInactive?: boolean
                hasNext?: boolean
                hasPrevious?: boolean
            }
        >
        round: StyledComponent<
            'div',
            DefaultTheme,
            {
                isPressed?: boolean
                isInactive?: boolean
            }
        >
    }
    slider: {
        track: StyledComponent<'div', DefaultTheme>
        trackFill: StyledComponent<'div', DefaultTheme, { width: number }>
        thumb: StyledComponent<'div', DefaultTheme, { x: number }>
    }
    knob: {
        base: StyledComponent<'div', DefaultTheme, { radius: number }>
        indicator: (props: PropsWithChildren<{ radius: number }>) => JSX.Element
        tick: (props: PropsWithChildren<{ radius: number; isMajor: boolean }>) => JSX.Element
    }
    step: {
        step: StyledComponent<
            'div',
            DefaultTheme,
            {
                color: string
                isActive: boolean
                isPlaying: boolean
                isOdd: boolean
                isMuted: boolean
            }
        >
    }
}
