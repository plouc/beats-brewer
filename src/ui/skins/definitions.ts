import { PropsWithChildren } from 'react'
import { DefaultTheme, StyledComponent } from 'styled-components'

export interface Skin {
    id: string
    name: string
    theme: DefaultTheme
    enclosure: (props: PropsWithChildren<{}>) => JSX.Element
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
}
