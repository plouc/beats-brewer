import { createElement, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useAppStore } from '../../store/useApp'

export const RoundButton = ({
    children,
    ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    isPressed?: boolean
    isInactive?: boolean
    hasNext?: boolean
    hasPrevious?: boolean
}) => {
    const skin = useAppStore((state) => state.skin)

    return createElement(skin.button.round, props, children)
}
