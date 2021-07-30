import { createElement, PropsWithChildren } from 'react'
import { useAppStore } from '../useApp'

export const Enclosure = ({ children }: PropsWithChildren<{}>) => {
    const skin = useAppStore((state) => state.skin)

    return createElement(skin.enclosure, {}, children)
}
