import { createElement, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useAppStore } from '../../store/useApp'

export const Button = ({
    children,
    ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    isPressed?: boolean
    isInactive?: boolean
}) => {
    const skin = useAppStore((state) => state.skin)

    return createElement(skin.button.basic, props, children)
}
