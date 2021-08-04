import { createElement, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useAppStore } from '../../store/useApp'

export const SquareButton = ({
    children,
    ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    isPressed?: boolean
    isInactive?: boolean
}) => {
    const skin = useAppStore((state) => state.skin)

    return createElement(skin.button.square, props, children)
}
