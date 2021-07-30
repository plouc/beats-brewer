import { PropsWithChildren } from 'react'
import { DefaultTheme } from 'styled-components'

export interface Skin {
    id: string
    name: string
    theme: DefaultTheme
    enclosure: (props: PropsWithChildren<{}>) => JSX.Element
}
